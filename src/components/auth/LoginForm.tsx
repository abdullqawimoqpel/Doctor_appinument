'use client';

import { Suspense, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push(next);
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest p-4">
      <div className="bg-surface-container-low p-10 rounded-3xl shadow-xl w-full max-w-md border border-outline-variant/30">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <span className="material-symbols-outlined text-3xl text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
          </div>
          <h1 className="text-display-sm font-headline-md text-primary mb-1">MediSync</h1>
          <p className="text-body-md text-on-surface-variant">Sign in to manage your appointments</p>
        </div>

        {error && (
          <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>{error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">Email Address</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="name@example.com"/>
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="••••••••" minLength={6}/>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all disabled:opacity-50">
            {loading ? 'Processing...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-outline-variant/30 text-center">
          <p className="text-body-sm text-on-surface-variant mb-3">Don't have an account?</p>
          <button onClick={() => router.push('/register')}
            className="bg-surface-container-low border border-outline-variant text-primary px-6 py-3 rounded-xl font-label-md hover:bg-surface-container transition-colors w-full">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export function LoginFormSuspenseWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <LoginForm />
    </Suspense>
  );
}
