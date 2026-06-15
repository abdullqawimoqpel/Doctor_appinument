import { SupabaseClient } from '@supabase/supabase-js';
import { AppointmentRepository } from '@/repositories/appointment.repository';
import { CreateAppointmentSchema, type CreateAppointmentInput } from '@/schemas/appointment.schema';

/**
 * Appointment Service — business logic layer.
 * 
 * Architecture:  UI → Service → Repository → Database
 * 
 * Validates inputs with Zod schemas,
 * orchestrates business rules (conflict detection, soft deletes),
 * delegates data access to AppointmentRepository.
 */
export class AppointmentService {
  private repo: AppointmentRepository;

  constructor(private supabase: SupabaseClient) {
    this.repo = new AppointmentRepository(supabase);
  }

  /**
   * Create a new appointment with full validation + conflict detection.
   */
  async create(input: CreateAppointmentInput) {
    // Domain validation
    const validation = CreateAppointmentSchema.safeParse(input);
    if (!validation.success) {
      throw new Error(validation.error.issues.map(e => e.message).join(', '));
    }

    const { doctorId, serviceId, appointmentDate, startTime } = validation.data;

    // Get authenticated user
    const { data: { user } } = await this.supabase.auth.getUser();
    if (!user) throw new Error('Authentication required');

    // Conflict detection (pre-check before DB constraint)
    const hasConflict = await this.repo.checkConflict(doctorId, appointmentDate, startTime);
    if (hasConflict) {
      throw new Error('This time slot is already booked. Please select a different time.');
    }

    try {
      return await this.repo.create({
        patient_id: user.id,
        doctor_id: doctorId,
        service_id: serviceId || null,
        appointment_date: appointmentDate,
        start_time: startTime,
        status: 'pending',
      });
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === '23505') {
        throw new Error('This time slot is already booked. Please select a different time.');
      }
      throw error;
    }
  }

  /**
   * Cancel an appointment (soft delete).
   */
  async cancel(appointmentId: string, reason?: string) {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (!user) throw new Error('Authentication required');
    return this.repo.softCancel(appointmentId, user.id, reason);
  }

  /**
   * Confirm an appointment (doctor action).
   */
  async confirm(appointmentId: string) {
    return this.repo.updateStatus(appointmentId, 'confirmed');
  }

  /**
   * Mark appointment as completed (doctor action).
   */
  async complete(appointmentId: string) {
    return this.repo.updateStatus(appointmentId, 'completed');
  }

  /**
   * Get all appointments for the authenticated patient.
   */
  async getMyAppointments() {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (!user) throw new Error('Authentication required');
    return this.repo.findByPatient(user.id);
  }

  /**
   * Get all appointments for the authenticated doctor.
   */
  async getDoctorAppointments() {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (!user) throw new Error('Authentication required');
    return this.repo.findByDoctor(user.id);
  }
}
