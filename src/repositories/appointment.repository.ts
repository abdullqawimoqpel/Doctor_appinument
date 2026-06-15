import { SupabaseClient } from '@supabase/supabase-js';

export interface AppointmentRow {
  id: string;
  patient_id: string;
  doctor_id: string;
  service_id: string | null;
  appointment_date: string;
  start_time: string;
  status: string;
  cancelled_at: string | null;
  cancellation_reason: string | null;
  created_at: string;
}

export interface CreateAppointmentData {
  patient_id: string;
  doctor_id: string;
  service_id?: string | null;
  appointment_date: string;
  start_time: string;
  status: string;
}

/**
 * Repository layer — abstracts all direct database access for appointments.
 * Services call repositories; repositories call Supabase.
 * Changing the database later only requires changing this file.
 */
export class AppointmentRepository {
  constructor(private db: SupabaseClient) {}

  async create(data: CreateAppointmentData): Promise<AppointmentRow> {
    const { data: row, error } = await this.db
      .from('appointments')
      .insert(data)
      .select()
      .single();
    if (error) throw error;
    return row;
  }

  async findById(id: string): Promise<AppointmentRow | null> {
    const { data, error } = await this.db
      .from('appointments')
      .select('*')
      .eq('id', id)
      .single();
    if (error) return null;
    return data;
  }

  async findByPatient(patientId: string) {
    const { data, error } = await this.db
      .from('appointments')
      .select('*, doctors(specialty, clinic_name, profiles(full_name, avatar_url)), services(name, price)')
      .eq('patient_id', patientId)
      .order('appointment_date', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async findByDoctor(doctorId: string) {
    const { data, error } = await this.db
      .from('appointments')
      .select('*, profiles!appointments_patient_id_fkey(full_name, email, avatar_url), services(name, duration_minutes)')
      .eq('doctor_id', doctorId)
      .order('appointment_date', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async updateStatus(id: string, status: string, additionalFields?: Record<string, unknown>) {
    const { data, error } = await this.db
      .from('appointments')
      .update({ status, ...additionalFields })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async softCancel(id: string, patientId: string, reason?: string) {
    const { data, error } = await this.db
      .from('appointments')
      .update({
        status: 'cancelled',
        cancelled_at: new Date().toISOString(),
        cancellation_reason: reason || null,
      })
      .eq('id', id)
      .eq('patient_id', patientId)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async checkConflict(doctorId: string, date: string, time: string): Promise<boolean> {
    const { data } = await this.db
      .from('appointments')
      .select('id')
      .eq('doctor_id', doctorId)
      .eq('appointment_date', date)
      .eq('start_time', time)
      .neq('status', 'cancelled')
      .limit(1);
    return (data?.length ?? 0) > 0;
  }
}
