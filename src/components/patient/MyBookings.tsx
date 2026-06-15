'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { AppointmentService } from '@/services/appointment.service';

interface Appointment {
  id: string;
  appointment_date: string;
  start_time: string;
  status: string;
  doctors: {
    specialty: string;
    clinic_name: string;
    profiles: { full_name: string };
  };
  services: { name: string } | null;
}

export default function MyBookings() {
  const supabase = createClient();
  const appointmentSvc = new AppointmentService(supabase);
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await appointmentSvc.getMyAppointments();
        setAppointments(data as any);
      } catch {
        router.push('/login?next=/patient/my-bookings');
      }
      setLoading(false);
    }
    load();
  }, []);

  const handleCancel = async (id: string) => {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;
    try {
      await appointmentSvc.cancel(id, 'Patient requested cancellation');
      setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelled' } : a));
    } catch (err: any) {
      alert(err.message);
    }
  };

  const upcoming = appointments.filter(a => a.status === 'pending' || a.status === 'confirmed');
  const past = appointments.filter(a => a.status === 'completed' || a.status === 'cancelled');

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

  const formatDate = (d: string) => {
    const date = new Date(d + 'T00:00:00');
    return { month: date.toLocaleString('en', { month: 'short' }), day: date.getDate().toString() };
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen w-[280px] bg-surface shadow-sm border-r border-outline-variant fixed left-0 top-0 z-40">
        <div className="p-6 border-b border-outline-variant flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[20px]">medical_services</span>
          </div>
          <div>
            <h1 className="text-headline-sm font-headline-sm text-primary">MediSync</h1>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Patient Portal</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-4">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/find-doctors">
            <span className="material-symbols-outlined">search</span>
            <span className="font-label-md text-label-md">Find Doctors</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold bg-surface-container-low border-l-4 border-primary" href="/patient/my-bookings">
            <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_month</span>
            <span className="font-label-md text-label-md">My Bookings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/book">
            <span className="material-symbols-outlined">add_circle</span>
            <span className="font-label-md text-label-md">New Booking</span>
          </a>
        </nav>
        <div className="p-4 border-t border-outline-variant">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-error hover:bg-error-container transition-colors w-full" onClick={async () => { await supabase.auth.signOut(); router.push('/login'); }}>
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-sm text-body-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
        <header className="md:hidden flex justify-between items-center w-full px-4 py-4 sticky top-0 z-50 bg-surface-container-lowest shadow-sm">
          <div className="text-headline-md font-headline-md text-primary">MediSync</div>
        </header>

        <div className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">My Bookings</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your upcoming and past medical appointments.</p>
            </div>
            <button onClick={() => router.push('/book')} className="bg-primary text-on-primary px-5 py-3 rounded-lg font-label-md hover:bg-primary/90 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">add</span>New Booking
            </button>
          </div>

          {loading ? (
            <div className="text-center py-20 text-on-surface-variant">Loading your bookings...</div>
          ) : appointments.length === 0 ? (
            <div className="text-center py-20 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">event_busy</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">No Bookings Yet</h3>
              <p className="text-body-md text-on-surface-variant mb-6">You haven't booked any appointments. Find a doctor and book your first visit!</p>
              <button onClick={() => router.push('/find-doctors')} className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:bg-primary/90 transition-colors">Find Doctors</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Upcoming */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Upcoming</h3>
                    <span className="bg-surface-container-high text-on-surface px-2 py-1 rounded-full font-label-sm text-label-sm">{upcoming.length} Appointments</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {upcoming.length === 0 ? (
                      <p className="text-on-surface-variant text-body-sm py-4">No upcoming appointments.</p>
                    ) : upcoming.map(apt => {
                      const { month, day } = formatDate(apt.appointment_date);
                      return (
                        <div key={apt.id} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center relative overflow-hidden hover:shadow-md transition-shadow">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                          <div className="bg-surface-container-low rounded-lg p-3 min-w-[80px] text-center flex flex-col items-center shrink-0">
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{month}</span>
                            <span className="font-headline-md text-headline-md text-primary leading-none my-1">{day}</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">{apt.start_time?.slice(0, 5)}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-headline-sm text-headline-sm text-on-surface truncate">{apt.doctors?.profiles?.full_name}</h4>
                              <span className={`${statusColors[apt.status]} px-2 py-0.5 rounded-md font-label-sm text-label-sm flex items-center gap-1`}>
                                <span className="material-symbols-outlined text-[14px]">{statusIcons[apt.status]}</span> {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                              </span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{apt.services?.name || apt.doctors?.specialty} • {apt.doctors?.clinic_name}</p>
                          </div>
                          <button onClick={() => handleCancel(apt.id)} className="px-4 py-2 border border-error/30 text-error rounded-lg font-label-sm hover:bg-error-container transition-colors whitespace-nowrap flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">cancel</span>Cancel
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Past */}
                {past.length > 0 && (
                  <section>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Past</h3>
                    <div className="flex flex-col gap-3 opacity-80 hover:opacity-100 transition-opacity">
                      {past.map(apt => (
                        <div key={apt.id} className="bg-surface rounded-xl p-4 border border-outline-variant flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-on-surface-variant">stethoscope</span>
                            </div>
                            <div>
                              <h4 className="font-label-md text-label-md text-on-surface">{apt.doctors?.profiles?.full_name}</h4>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">{apt.doctors?.specialty} • {apt.appointment_date}</p>
                            </div>
                          </div>
                          <span className={`${statusColors[apt.status]} px-2 py-0.5 rounded font-label-sm text-label-sm`}>{apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Stats */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-low p-4 rounded-lg text-center">
                      <span className="block font-headline-lg text-headline-lg text-secondary">{appointments.length}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Total</span>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-lg text-center">
                      <span className="block font-headline-lg text-headline-lg text-primary">{upcoming.length}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Upcoming</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-container rounded-xl p-5 text-on-primary-container relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">Need help?</h3>
                    <p className="font-body-sm text-body-sm mb-4 opacity-90 text-on-primary">Our cancellation policy requires 24 hours notice to avoid a fee.</p>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary-fixed hover:underline" href="#">Read Policy <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
