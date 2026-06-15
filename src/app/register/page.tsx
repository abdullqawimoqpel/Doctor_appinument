import { RegisterForm } from '@/components/auth/RegisterForm';
import { Suspense } from 'react';

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <RegisterForm />
    </Suspense>
  );
}

