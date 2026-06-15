import { Suspense } from 'react';
import BookForm from '@/components/booking/BookForm';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <BookForm />
    </Suspense>
  );
}
