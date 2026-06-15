'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useSearchParams, useRouter } from 'next/navigation';
import { AppointmentService } from '@/services/appointment.service';
import { DoctorService } from '@/services/doctor.service';

interface Doctor {
  id: string;
  specialty: string;
  clinic_name: string;
  profiles: { full_name: string; avatar_url: string };
}

interface Service {
  id: string;
  name: string;
  duration_minutes: number;
  price: number;
}

export default function BookForm() {
  const supabase = createClient();
  const appointmentSvc = new AppointmentService(supabase);
  const doctorSvc = new DoctorService(supabase);
  const router = useRouter();
  const searchParams = useSearchParams();
  const doctorId = searchParams.get('doctor');

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<string>(doctorId || '');
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const data = await doctorSvc.listAll();
      setDoctors(data as any);
      if (doctorId) setSelectedDoctor(doctorId);
    }
    load();
  }, []);

  useEffect(() => {
    if (!selectedDoctor) return;
    async function loadServices() {
      const data = await doctorSvc.getServices(selectedDoctor);
      setServices(data);
    }
    loadServices();
  }, [selectedDoctor]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const appointment = await appointmentSvc.create({
        doctorId: selectedDoctor,
        serviceId: selectedService || undefined,
        appointmentDate: selectedDate,
        startTime: selectedTime,
      });

      const selectedServiceDetails = services.find(s => s.id === selectedService);
      const srvName = selectedServiceDetails?.name || 'General Consultation';
      const srvPrice = selectedServiceDetails?.price || 50;
      const dctrName = currentDoctor?.profiles?.full_name || 'Doctor';

      // Call Checkout API
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointmentId: appointment.id,
          serviceName: srvName,
          price: srvPrice,
          doctorName: dctrName,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to initialize payment');
      }

    } catch (err: any) {
      setError(err.message);
      setSubmitting(false); // only re-enable if error, otherwise we are redirecting
    }
  };

  const currentDoctor = doctors.find(d => d.id === selectedDoctor);
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:00', '14:30', '15:00', '15:30'];

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest p-4">
        <div className="bg-surface-container-low p-10 rounded-3xl shadow-xl text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Booking Confirmed!</h2>
          <p className="text-body-md text-on-surface-variant mb-6">Your appointment has been submitted successfully. You will receive a confirmation shortly.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => router.push('/patient/my-bookings')} className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:bg-primary/90 transition-colors">View My Bookings</button>
            <button onClick={() => router.push('/find-doctors')} className="border border-outline-variant px-6 py-3 rounded-lg font-label-md text-primary hover:bg-surface-container-low transition-colors">Find More Doctors</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center p-4">
      <main className="w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 bg-surface-container-low p-6 flex flex-col border-b md:border-b-0 md:border-r border-outline-variant">
          <div className="flex items-center gap-2 mb-8 text-primary">
            <span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
            <span className="font-headline-sm text-headline-sm">MediSync</span>
          </div>
          <button onClick={() => router.back()} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md w-fit mb-4">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>Back
          </button>
          <h1 className="font-headline-lg text-headline-lg text-on-background mb-4">Book Appointment</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">Select a doctor, date, and time for your visit.</p>

          {currentDoctor && (
            <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant mt-auto">
              <div className="flex items-center gap-3 mb-2">
                <img alt="Doctor" className="w-12 h-12 rounded-full object-cover" src={currentDoctor.profiles?.avatar_url || 'https://via.placeholder.com/48'}/>
                <div>
                  <h3 className="font-label-md text-label-md text-on-background">{currentDoctor.profiles?.full_name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{currentDoctor.specialty}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>{currentDoctor.clinic_name}</span>
              </div>
            </div>
          )}
        </aside>

        {/* Main Form */}
        <section className="w-full md:w-2/3 p-6 flex flex-col bg-surface-container-lowest">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && <div className="bg-error-container text-on-error-container p-4 rounded-xl text-sm">{error}</div>}

            {/* Doctor Selection */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Select Doctor</label>
              <select value={selectedDoctor} onChange={e => setSelectedDoctor(e.target.value)} required className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface-container-lowest">
                <option value="">Choose a doctor...</option>
                {doctors.map(d => <option key={d.id} value={d.id}>{d.profiles?.full_name} — {d.specialty}</option>)}
              </select>
            </div>

            {/* Service Selection */}
            {services.length > 0 && (
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Select Service</label>
                <select value={selectedService} onChange={e => setSelectedService(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface-container-lowest">
                  <option value="">Any service</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.name} — ${Number(s.price).toFixed(0)} ({s.duration_minutes} min)</option>)}
                </select>
              </div>
            )}

            {/* Date */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Preferred Date</label>
              <input type="date" required value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface-container-lowest"/>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Preferred Time</label>
              <div className="grid grid-cols-5 gap-2">
                {timeSlots.map(t => (
                  <button key={t} type="button" onClick={() => setSelectedTime(t)}
                    className={`py-2 px-3 border rounded font-body-sm text-body-sm text-center transition-colors ${selectedTime === t ? 'border-2 border-primary bg-primary-container text-on-primary-fixed font-label-md shadow-sm' : 'border-outline-variant text-on-surface hover:border-primary hover:text-primary'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Reason for visit</label>
              <input type="text" value={reason} onChange={e => setReason(e.target.value)} placeholder="e.g., Annual checkup, mild chest pain" className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface-container-lowest"/>
            </div>

            <button type="submit" disabled={submitting || !selectedDoctor || !selectedDate || !selectedTime}
              className="w-full mt-4 bg-secondary text-on-secondary py-3 px-6 rounded-lg font-label-md text-label-md hover:bg-on-secondary-fixed-variant transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50">
              {submitting ? 'Submitting...' : 'Confirm Booking'}
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
