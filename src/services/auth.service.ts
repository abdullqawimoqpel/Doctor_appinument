import { SupabaseClient } from '@supabase/supabase-js';
import { SignInSchema, SignUpSchema, type SignInInput, type SignUpInput } from '@/schemas/auth.schema';

/**
 * Auth Service — handles authentication with Zod validation.
 * 
 * Architecture:  UI → Service → Supabase Auth
 */
export class AuthService {
  constructor(private supabase: SupabaseClient) {}

  async signIn(input: SignInInput) {
    const validation = SignInSchema.safeParse(input);
    if (!validation.success) {
      throw new Error(validation.error.issues.map(e => e.message).join(', '));
    }

    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: validation.data.email,
      password: validation.data.password,
    });

    if (error) throw error;
    return data;
  }

  async signUp(input: SignUpInput) {
    const validation = SignUpSchema.safeParse(input);
    if (!validation.success) {
      throw new Error(validation.error.issues.map(e => e.message).join(', '));
    }

    const { email, password, role, fullName } = validation.data;

    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role, full_name: fullName || email.split('@')[0] },
      },
    });

    if (error) throw error;
    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getCurrentUser() {
    const { data: { user } } = await this.supabase.auth.getUser();
    return user;
  }

  async hasRole(role: string): Promise<boolean> {
    const user = await this.getCurrentUser();
    if (!user) return false;

    const { data: profile } = await this.supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    return profile?.role === role;
  }
}
