import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import ProviderAvailability from '@/components/provider/ProviderAvailability';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return <ProviderAvailability userId={user.id} />;
}
