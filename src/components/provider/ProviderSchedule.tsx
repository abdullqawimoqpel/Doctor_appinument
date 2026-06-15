'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { AppointmentService } from '@/services/appointment.service';

interface Appointment {
  id: string;
  appointment_date: string;
  start_time: string;
  status: string;
  cancelled_at: string | null;
  profiles: { full_name: string; email: string; avatar_url: string } | null;
  services: { name: string; duration_minutes: number } | null;
}

const statusColors: Record<string, string> = {
  pending: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  confirmed: 'bg-secondary-container text-on-secondary-container',
  completed: 'bg-surface-container text-on-surface-variant',
  cancelled: 'bg-error-container text-on-error-container',
};

const statusIcons: Record<string, string> = {
  pending: 'pending',
  confirmed: 'check_circle',
  completed: 'task_alt',
  cancelled: 'cancel',
};

export default function ProviderSchedule({
  initialAppointments,
  doctorName,
  userId
}: {
  initialAppointments: Appointment[];
  doctorName: string;
  userId: string;
}) {
  const supabase = createClient();
  const appointmentSvc = new AppointmentService(supabase);
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [loading, setLoading] = useState(false); // We have initial data now

  useEffect(() => {
    // Realtime subscription for live updates
    const channel = supabase
      .channel('doctor-appointments')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'appointments' }, async (payload) => {
        // Refetch to get joined data
        const { data } = await supabase
          .from('appointments')
          .select('*, profiles!appointments_patient_id_fkey(full_name, email, avatar_url), services(name, duration_minutes)')
          .eq('doctor_id', userId)
          .order('appointment_date', { ascending: true });
        setAppointments((data as any) || []);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [userId, supabase]);

  const handleConfirm = async (id: string) => {
    try {
      await appointmentSvc.confirm(id);
      setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'confirmed' } : a));
    } catch (err: any) { alert(err.message); }
  };

  const handleComplete = async (id: string) => {
    const { error } = await supabase.from('appointments').update({ status: 'completed' }).eq('id', id);
    if (!error) setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'completed' } : a));
  };

  const today = new Date().toISOString().split('T')[0];
  const todayAppts = appointments.filter(a => a.appointment_date === today && a.status !== 'cancelled');
  const upcoming = appointments.filter(a => a.appointment_date >= today && a.status !== 'cancelled' && a.status !== 'completed');
  const pending = appointments.filter(a => a.status === 'pending');
  const confirmed = appointments.filter(a => a.status === 'confirmed');

  const formatDate = (d: string) => {
    const date = new Date(d + 'T00:00:00');
    return date.toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <>
      <nav className="hidden md:flex flex-col h-screen border-r border-outline-variant bg-surface shadow-sm fixed left-0 top-0 w-[280px] z-40">
        <div className="p-6 flex items-center gap-3 border-b border-outline-variant">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[20px]">medical_services</span>
          </div>
          <div>
            <h1 className="font-headline-sm text-headline-sm text-primary">MediSync Pro</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Provider Portal</p>
          </div>
        </div>
        <div className="p-4">
          <a href="/book" className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[20px]">add</span>New Appointment
          </a>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container-low" href="/provider/schedule">
            <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/services">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="font-body-md text-body-md">Services</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/availability">
            <span className="material-symbols-outlined">event_available</span>
            <span className="font-body-md text-body-md">Availability</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/telehealth">
            <span className="material-symbols-outlined">videocam</span>
            <span className="font-body-md text-body-md">Telehealth</span>
          </a>
        </div>
        <div className="p-4 border-t border-outline-variant flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </a>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors w-full" onClick={async () => { await supabase.auth.signOut(); window.location.href = '/login'; }}>
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md text-body-md">Logout</span>
          </button>
        </div>
      </nav>

      <main className="flex-1 md:ml-[280px] min-h-screen flex flex-col bg-surface-container-lowest">
        <header className="bg-surface-container-lowest border-b border-outline-variant px-6 py-6 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Welcome back, Dr. {doctorName.split(' ').pop()}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Here&apos;s your schedule overview</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-secondary-container px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-label-sm text-label-sm text-on-secondary-container">Live Updates Active</span>
            </div>
          </div>
        </header>

        <div className="p-6 flex flex-col gap-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center"><span className="material-symbols-outlined text-primary">event_note</span></div>
              <div><p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Today</p><p className="font-headline-lg text-headline-lg text-primary">{todayAppts.length}</p></div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center"><span className="material-symbols-outlined text-tertiary">pending_actions</span></div>
              <div><p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending</p><p className="font-headline-lg text-headline-lg text-tertiary">{pending.length}</p></div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center"><span className="material-symbols-outlined text-secondary">check_circle</span></div>
              <div><p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Confirmed</p><p className="font-headline-lg text-headline-lg text-secondary">{confirmed.length}</p></div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center"><span className="material-symbols-outlined text-on-surface-variant">calendar_month</span></div>
              <div><p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Upcoming</p><p className="font-headline-lg text-headline-lg text-on-surface">{upcoming.length}</p></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main appointment list */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-md text-headline-md text-primary">All Appointments</h3>
                <span className="bg-surface-container-high text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm">{appointments.length} Total</span>
              </div>

              {loading ? (
                <div className="text-center py-16 text-on-surface-variant">Loading appointments...</div>
              ) : appointments.length === 0 ? (
                <div className="text-center py-16 bg-surface-container-low rounded-2xl">
                  <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 block">event_busy</span>
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-2">No Appointments Yet</h4>
                  <p className="text-body-md text-on-surface-variant">Patients will appear here once they book with you.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {appointments.map(apt => (
                    <div key={apt.id} className={`bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow relative overflow-hidden ${apt.status === 'cancelled' ? 'opacity-60' : ''}`}>
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: apt.status === 'confirmed' ? 'var(--md-sys-color-secondary)' : apt.status === 'pending' ? 'var(--md-sys-color-tertiary)' : 'var(--md-sys-color-outline-variant)' }}></div>
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="bg-surface-container-low rounded-lg p-3 min-w-[90px] text-center shrink-0">
                          <span className="block font-label-sm text-label-sm text-secondary uppercase tracking-wider">{formatDate(apt.appointment_date)}</span>
                          <span className="block font-headline-sm text-headline-sm text-primary mt-1">{apt.start_time?.slice(0, 5)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h4 className="font-headline-sm text-headline-sm text-on-surface">{apt.profiles?.full_name || 'Unknown Patient'}</h4>
                            <span className={`${statusColors[apt.status]} px-2 py-0.5 rounded-md font-label-sm text-label-sm flex items-center gap-1`}>
                              <span className="material-symbols-outlined text-[14px]">{statusIcons[apt.status]}</span>
                              {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{apt.services?.name || 'General Consultation'} {apt.services?.duration_minutes ? `• ${apt.services.duration_minutes} min` : ''}</p>
                          {apt.profiles?.email && <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{apt.profiles.email}</p>}
                        </div>
                        {/* Actions */}
                        <div className="flex gap-2 shrink-0">
                          {apt.status === 'pending' && (
                            <button onClick={() => handleConfirm(apt.id)} className="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-sm hover:bg-secondary/90 transition-colors flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">check</span>Confirm
                            </button>
                          )}
                          {apt.status === 'confirmed' && (
                            <button onClick={() => handleComplete(apt.id)} className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm hover:bg-primary/90 transition-colors flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">task_alt</span>Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Today Section */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Today&apos;s Schedule</h3>
                  <span className="bg-primary-container text-on-primary-container px-2 py-1 rounded-full font-label-sm text-label-sm">{todayAppts.length}</span>
                </div>
                {todayAppts.length === 0 ? (
                  <p className="text-body-sm text-on-surface-variant py-4">No appointments scheduled for today.</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {todayAppts.slice(0, 5).map(apt => (
                      <div key={apt.id} className="border border-outline-variant rounded-lg p-3 hover:border-secondary transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-sm shrink-0">
                            {(apt.profiles?.full_name || 'U').split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-label-md text-label-md text-on-surface truncate">{apt.profiles?.full_name}</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">{apt.start_time?.slice(0, 5)} • {apt.services?.name || 'General'}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Quick Actions</h3>
                <div className="flex flex-col gap-2">
                  <a href="/provider/services" className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-surface-container-low text-left transition-colors">
                    <span className="material-symbols-outlined text-secondary">medical_services</span>
                    <div><p className="font-label-md text-label-md text-on-surface">Manage Services</p><p className="font-body-sm text-[11px] text-on-surface-variant">Add or edit offerings</p></div>
                  </a>
                  <a href="/provider/availability" className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-surface-container-low text-left transition-colors">
                    <span className="material-symbols-outlined text-primary">tune</span>
                    <div><p className="font-label-md text-label-md text-on-surface">Availability Settings</p><p className="font-body-sm text-[11px] text-on-surface-variant">Manage working hours</p></div>
                  </a>
                </div>
              </div>

              {/* Realtime badge */}
              <div className="bg-primary-container rounded-xl p-5 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-on-primary-container">sync</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-primary-container">Realtime Sync</h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-primary-container/80">New bookings and status changes appear automatically — no refresh needed.</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
