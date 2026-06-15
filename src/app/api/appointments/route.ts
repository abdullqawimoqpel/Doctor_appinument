import { createClient } from '@/utils/supabase/server';
import { AppointmentRepository } from '@/repositories/appointment.repository';
import { CreateAppointmentSchema } from '@/schemas/appointment.schema';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/appointments — Create a new appointment
 * Validates input with Zod, checks conflicts, and inserts via repository.
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const body = await request.json();

    // Validate with Zod
    const result = CreateAppointmentSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { doctorId, serviceId, appointmentDate, startTime } = result.data;
    const repo = new AppointmentRepository(supabase);

    // Check conflict before inserting
    const conflict = await repo.checkConflict(doctorId, appointmentDate, startTime);
    if (conflict) {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please select a different time.' },
        { status: 409 }
      );
    }

    const appointment = await repo.create({
      patient_id: user.id,
      doctor_id: doctorId,
      service_id: serviceId || null,
      appointment_date: appointmentDate,
      start_time: startTime,
      status: 'pending',
    });

    return NextResponse.json({ data: appointment }, { status: 201 });
  } catch (error: any) {
    // Handle unique constraint violation (race condition fallback)
    if (error?.code === '23505') {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please select a different time.' },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

/**
 * GET /api/appointments — List appointments for the authenticated user
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const repo = new AppointmentRepository(supabase);

    // Check role from profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    const role = profile?.role || user.user_metadata?.role || 'patient';

    const data = role === 'doctor'
      ? await repo.findByDoctor(user.id)
      : await repo.findByPatient(user.id);

    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
