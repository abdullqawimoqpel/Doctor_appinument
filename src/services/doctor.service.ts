import { SupabaseClient } from '@supabase/supabase-js';
import { DoctorRepository } from '@/repositories/doctor.repository';

/**
 * Doctor Service — business logic layer.
 * 
 * Architecture:  UI → Service → Repository → Database
 */
export class DoctorService {
  private repo: DoctorRepository;

  constructor(private supabase: SupabaseClient) {
    this.repo = new DoctorRepository(supabase);
  }

  /** List all doctors (public). */
  async listAll() {
    return this.repo.findAll();
  }

  /** Get a single doctor by ID (public). */
  async getById(id: string) {
    return this.repo.findById(id);
  }

  /** Get services offered by a doctor (public). */
  async getServices(doctorId: string) {
    return this.repo.findServices(doctorId);
  }

  /** Get current doctor's profile (authenticated). */
  async getMyProfile() {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (!user) throw new Error('Authentication required');
    return this.repo.findProfile(user.id);
  }
}
