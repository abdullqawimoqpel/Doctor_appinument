import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import ProviderServices from '@/components/provider/ProviderServices';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data } = await supabase
    .from('services')
    .select('*')
    .eq('doctor_id', user.id);

  return <ProviderServices initialServices={data || []} userId={user.id} />;
}
