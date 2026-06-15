import { SupabaseClient } from '@supabase/supabase-js';

export interface DoctorRow {
  id: string;
  specialty: string;
  bio: string;
  experience_years: number;
  clinic_name: string;
  rating: number;
  review_count: number;
}

export interface ServiceRow {
  id: string;
  doctor_id: string;
  name: string;
  duration_minutes: number;
  price: number;
}

/**
 * Repository layer — abstracts all direct database access for doctors.
 */
export class DoctorRepository {
  constructor(private db: SupabaseClient) {}

  async findAll() {
    const { data, error } = await this.db
      .from('doctors')
      .select('*, profiles(full_name, avatar_url)')
      .order('rating', { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async findById(id: string) {
    const { data, error } = await this.db
      .from('doctors')
      .select('*, profiles(full_name, avatar_url)')
      .eq('id', id)
      .single();
    if (error) return null;
    return data;
  }

  async findServices(doctorId: string): Promise<ServiceRow[]> {
    const { data, error } = await this.db
      .from('services')
      .select('*')
      .eq('doctor_id', doctorId)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return (data as ServiceRow[]) || [];
  }

  async createService(doctorId: string, service: { name: string; duration_minutes: number; price: number }) {
    const { data, error } = await this.db.from('services').insert({ doctor_id: doctorId, ...service }).select().single();
    if (error) throw error;
    return data;
  }

  async deleteService(id: string) {
    const { error } = await this.db.from('services').delete().eq('id', id);
    if (error) throw error;
  }

  async findProfile(userId: string) {
    const { data, error } = await this.db
      .from('profiles')
      .select('full_name, avatar_url, email, role')
      .eq('id', userId)
      .single();
    if (error) return null;
    return data;
  }
}
