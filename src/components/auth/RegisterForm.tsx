'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role, full_name: fullName || email.split('@')[0] },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Auto-redirect if session exists (no email confirmation required)
    if (data.session) {
      const dest = role === 'doctor' ? '/provider/schedule' : '/patient/my-bookings';
      router.push(dest);
      router.refresh();
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest p-4">
        <div className="bg-surface-container-low p-10 rounded-3xl shadow-xl w-full max-w-md border border-outline-variant/30 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container mb-6">
            <span className="material-symbols-outlined text-3xl text-secondary">mark_email_read</span>
          </div>
          <h1 className="text-headline-md font-headline-md text-primary mb-3">Check Your Email</h1>
          <p className="text-body-md text-on-surface-variant mb-6">
            We've sent a confirmation link to <strong className="text-on-surface">{email}</strong>. Click the link to activate your account.
          </p>
          <button onClick={() => router.push('/login')}
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-label-md hover:bg-primary/90 transition-colors">
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest p-4">
      <div className="bg-surface-container-low p-10 rounded-3xl shadow-xl w-full max-w-md border border-outline-variant/30">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <span className="material-symbols-outlined text-3xl text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>person_add</span>
          </div>
          <h1 className="text-display-sm font-headline-md text-primary mb-1">Create Account</h1>
          <p className="text-body-md text-on-surface-variant">Join MediSync to manage your health</p>
        </div>

        {error && (
          <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>{error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">Full Name</label>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Dr. John Smith" />
          </div>

          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">Email Address</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="name@example.com" />
          </div>

          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="••••••••" minLength={6} />
          </div>

          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">Confirm Password</label>
            <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="••••••••" minLength={6} />
          </div>

          <div className="pt-2">
            <label className="block text-label-md font-label-md text-on-surface mb-3 text-center">I am a...</label>
            <div className="grid grid-cols-2 gap-4">
              <button type="button" onClick={() => setRole('patient')}
                className={`py-3 rounded-xl border-2 transition-all font-label-md flex items-center justify-center gap-2 ${role === 'patient' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant text-on-surface-variant hover:border-outline'}`}>
                <span className="material-symbols-outlined text-[20px]">person</span>Patient
              </button>
              <button type="button" onClick={() => setRole('doctor')}
                className={`py-3 rounded-xl border-2 transition-all font-label-md flex items-center justify-center gap-2 ${role === 'doctor' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant text-on-surface-variant hover:border-outline'}`}>
                <span className="material-symbols-outlined text-[20px]">stethoscope</span>Provider
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all disabled:opacity-50 mt-2">
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-outline-variant/30 text-center">
          <p className="text-body-sm text-on-surface-variant">Already have an account?</p>
          <button onClick={() => router.push('/login')}
            className="text-primary font-label-md hover:underline mt-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
