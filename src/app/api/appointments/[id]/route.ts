import { createClient } from '@/utils/supabase/server';
import { AppointmentRepository } from '@/repositories/appointment.repository';
import { UpdateStatusSchema } from '@/schemas/appointment.schema';
import { NextRequest, NextResponse } from 'next/server';

/**
 * PATCH /api/appointments/[id] — Update appointment status
 * Supports: confirm, complete, cancel (soft delete)
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const body = await request.json();

    // Validate with Zod
    const result = UpdateStatusSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { status, cancellation_reason } = result.data;
    const repo = new AppointmentRepository(supabase);

    // Verify the appointment exists
    const existing = await repo.findById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    // Authorization: patient can cancel, doctor can confirm/complete
    const isPatient = existing.patient_id === user.id;
    const isDoctor = existing.doctor_id === user.id;

    if (status === 'cancelled' && !isPatient) {
      return NextResponse.json({ error: 'Only the patient can cancel an appointment' }, { status: 403 });
    }
    if ((status === 'confirmed' || status === 'completed') && !isDoctor) {
      return NextResponse.json({ error: 'Only the doctor can confirm or complete an appointment' }, { status: 403 });
    }

    let appointment;
    if (status === 'cancelled') {
      appointment = await repo.softCancel(id, user.id, cancellation_reason);
    } else {
      appointment = await repo.updateStatus(id, status);
    }

    return NextResponse.json({ data: appointment });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
