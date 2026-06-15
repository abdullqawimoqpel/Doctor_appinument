'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

interface Service {
  id: string;
  name: string;
  duration_minutes: number;
  price: number;
}

export default function ProviderServices({
  initialServices,
  userId
}: {
  initialServices: Service[];
  userId: string;
}) {
  const [services, setServices] = useState<Service[]>(initialServices);
  const supabase = createClient();

  const handleAddService = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { data, error } = await supabase.from('services').insert({
      doctor_id: userId,
      name: formData.get('serviceName') as string,
      duration_minutes: parseInt(formData.get('serviceDuration') as string),
      price: parseFloat(formData.get('serviceFee') as string),
    }).select().single();

    if (data) {
      setServices(prev => [...prev, data]);
      document.getElementById('addServiceModal')?.classList.add('hidden');
      form.reset();
    }
    if (error) alert(error.message);
  };

  const handleDeleteService = async (id: string) => {
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (!error) setServices(prev => prev.filter(s => s.id !== id));
  };

  const icons = ['stethoscope', 'vaccines', 'monitor_heart', 'healing', 'medication', 'cardiology'];

  return (
    <>
      <nav className="bg-surface shadow-sm fixed left-0 top-0 h-screen w-[280px] flex flex-col border-r border-outline-variant z-40 hidden md:flex">
        <div className="p-gutter border-b border-outline-variant/30 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[20px]">medical_services</span>
          </div>
          <div>
            <h1 className="font-headline-sm text-headline-sm text-primary">MediSync Pro</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Provider Portal</p>
          </div>
        </div>
        <div className="p-gutter pb-stack-sm">
          <button className="w-full bg-primary text-on-primary py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-on-primary-fixed transition-colors font-label-md text-label-md cursor-pointer active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Appointment
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto py-stack-md flex flex-col gap-1 px-3">
          <li><a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="/provider/schedule"><span className="material-symbols-outlined">dashboard</span>Dashboard</a></li>
          <li><a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="/provider/schedule"><span className="material-symbols-outlined">calendar_month</span>Schedule</a></li>
          <li><a className="flex items-center gap-3 px-4 py-3 bg-surface-container-low text-primary font-bold border-r-4 border-primary font-body-md text-body-md" href="/provider/services"><span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>Services</a></li>
          <li><a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="/provider/availability"><span className="material-symbols-outlined">event_available</span>Availability</a></li>
        </ul>
        <div className="p-3 border-t border-outline-variant/30 mt-auto">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#">
            <span className="material-symbols-outlined">settings</span>Settings
          </a>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md w-full" onClick={async () => { await supabase.auth.signOut(); window.location.href = '/login'; }}>
            <span className="material-symbols-outlined">logout</span>Logout
          </button>
        </div>
      </nav>

      <header className="md:hidden bg-surface-container-lowest shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">medical_services</span>
          <span className="font-headline-sm text-headline-sm text-primary">MediSync Pro</span>
        </div>
      </header>

      <main className="flex-1 md:ml-[280px] w-full min-h-screen pb-20 md:pb-0 pt-[72px] md:pt-0">
        <div className="bg-surface-container-lowest px-4 md:px-8 py-8 border-b border-outline-variant/20 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.02)]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-primary">Services Management</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Manage your practice offerings, durations, and pricing.</p>
            </div>
            <button className="bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-on-primary-fixed transition-colors h-[48px]" onClick={() => document.getElementById('addServiceModal')?.classList.remove('hidden')}>
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add New Service
            </button>
          </div>
        </div>

        <div className="p-4 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary"><span className="material-symbols-outlined">list_alt</span></div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Services</p>
                <p className="font-headline-lg text-headline-lg text-primary">{services.length}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed"><span className="material-symbols-outlined">trending_up</span></div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Most Booked</p>
                <p className="font-headline-sm text-headline-sm text-primary truncate">{services[0]?.name || '—'}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary"><span className="material-symbols-outlined">payments</span></div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg. Fee</p>
                <p className="font-headline-lg text-headline-lg text-primary">${services.length > 0 ? Math.round(services.reduce((a, b) => a + Number(b.price), 0) / services.length) : 0}</p>
              </div>
            </div>
          </div>

          <h3 className="font-headline-md text-headline-md text-primary mb-4">Active Offerings</h3>

          {services.length === 0 ? (
            <div className="text-center py-16 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 block">medical_services</span>
              <p className="text-on-surface-variant mb-2">No services yet</p>
              <p className="text-body-sm text-on-surface-variant">Click "Add New Service" to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {services.map((svc, i) => (
                <div key={svc.id} className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{icons[i % icons.length]}</span>
                    </div>
                    <span className="bg-secondary-fixed/20 text-secondary font-label-sm text-label-sm px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-1">{svc.name}</h4>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>{svc.duration_minutes} min
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px]">payments</span>${Number(svc.price).toFixed(0)}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 border-t border-outline-variant/20 pt-4 mt-auto">
                    <button aria-label="Delete Service" className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded transition-colors" onClick={() => handleDeleteService(svc.id)}>
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Add Service Modal */}
      <div className="fixed inset-0 bg-primary/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm hidden" id="addServiceModal">
        <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-primary">Add New Service</h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors" onClick={() => document.getElementById('addServiceModal')?.classList.add('hidden')}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <form onSubmit={handleAddService} className="p-6 space-y-5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1" htmlFor="serviceName">Service Name</label>
              <input required className="w-full px-3 py-2 border border-outline-variant rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-body-md text-body-md bg-surface-container-lowest text-on-surface" id="serviceName" name="serviceName" placeholder="e.g. Telehealth Follow-up" type="text"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1" htmlFor="serviceDuration">Duration (Minutes)</label>
                <select className="w-full px-3 py-2 border border-outline-variant rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-body-md text-body-md bg-surface-container-lowest text-on-surface" defaultValue="30" id="serviceDuration" name="serviceDuration">
                  <option value="15">15 min</option>
                  <option value="30">30 min</option>
                  <option value="45">45 min</option>
                  <option value="60">60 min</option>
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1" htmlFor="serviceFee">Fee ($)</label>
                <input required className="w-full px-3 py-2 border border-outline-variant rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-body-md text-body-md bg-surface-container-lowest text-on-surface" id="serviceFee" name="serviceFee" placeholder="0.00" type="number" step="0.01"/>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/20">
              <button type="button" className="px-5 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low rounded transition-colors" onClick={() => document.getElementById('addServiceModal')?.classList.add('hidden')}>Cancel</button>
              <button type="submit" className="px-5 py-2 font-label-md text-label-md bg-primary text-on-primary rounded hover:bg-on-primary-fixed transition-colors">Save Service</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
