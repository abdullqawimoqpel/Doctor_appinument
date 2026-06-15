import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import ProviderSchedule from '@/components/provider/ProviderSchedule';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Get doctor name
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single();

  const doctorName = profile?.full_name || 'Provider';

  // Get appointments
  const { data } = await supabase
    .from('appointments')
    .select('*, profiles!appointments_patient_id_fkey(full_name, email, avatar_url), services(name, duration_minutes)')
    .eq('doctor_id', user.id)
    .order('appointment_date', { ascending: true });

  const appointments = (data as any) || [];

  return (
    <ProviderSchedule 
      initialAppointments={appointments} 
      doctorName={doctorName} 
      userId={user.id} 
    />
  );
}
