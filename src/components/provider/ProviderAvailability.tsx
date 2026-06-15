'use client';

import { createClient } from '@/utils/supabase/client';

export default function ProviderAvailability({ userId }: { userId: string }) {
  const supabase = createClient();

  return (
    <>
      <nav className="hidden md:flex flex-col h-full border-r border-outline-variant bg-surface shadow-sm fixed left-0 top-0 h-screen w-[280px] z-40">
        <div className="px-6 py-8 border-b border-outline-variant flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
          </div>
          <div>
            <h1 className="text-headline-sm font-headline-sm text-primary">MediSync Pro</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Provider Portal</p>
          </div>
        </div>
        <div className="p-4">
          <a href="/book" className="w-full bg-primary text-on-primary rounded-lg py-3 px-4 font-label-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined">add</span>
            New Appointment
          </a>
        </div>
        <ul className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
          <li><a className="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" href="/provider/schedule"><span className="material-symbols-outlined">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a></li>
          <li><a className="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" href="/provider/schedule"><span className="material-symbols-outlined">calendar_month</span><span className="font-label-md text-label-md">Appointments</span></a></li>
          <li><a className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container-low" href="/provider/availability"><span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>event_available</span><span className="font-label-md text-label-md">Schedule</span></a></li>
          <li><a className="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" href="/provider/services"><span className="material-symbols-outlined">medical_services</span><span className="font-label-md text-label-md">Services</span></a></li>
        </ul>
        <div className="p-3 border-t border-outline-variant space-y-1">
          <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
          <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-error hover:bg-error-container w-full transition-all" onClick={async () => { await supabase.auth.signOut(); window.location.href = '/login'; }}>
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col min-w-0 md:ml-[280px]">
        <header className="flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-30 bg-surface-container-lowest shadow-sm">
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-on-surface-variant p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="text-headline-md font-headline-md text-primary">MediSync</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary duration-200 ease-in-out transition-colors" href="#">Find Doctors</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary duration-200 ease-in-out transition-colors" href="#">Specialties</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary duration-200 ease-in-out transition-colors" href="#">How it Works</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary duration-200 ease-in-out transition-colors" href="#">Help</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-all duration-200">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-all duration-200">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover border border-outline-variant cursor-pointer" data-alt="A professional headshot of a female doctor with a warm, reassuring smile. The lighting is soft and bright, creating a clean, modern medical aesthetic. She is wearing a white coat over a subtle blue blouse, standing in front of a slightly out-of-focus, sterile clinical environment. The overall mood conveys trust, expertise, and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeVv8i8MnqEsn3DSqHFwsjVnyHtjE3cznD-8rjkXdFVvDQrU9W843mjjfuHUazFSB1CF57v813HG-_8jfqO4FZHTl6vp5szXnghFFK0s0p7vyXtf_7QUjwwY9qTHs648v3wn0qinqUamhKczuUPDvC2T9CuILiG55PGfU6dMtH_fRHpRtBcEmsnraibRBS25qPFA9ZvMJ3VUcF3fYCmMIeap_n7d1eqQXNAVPXMCs5UU7R7dYPvQRTULib30AyGXBi35rZUcf0Jg"/>
          </div>
        </header>

        <main className="flex-1 px-gutter py-stack-lg max-w-container-max mx-auto w-full">
          <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-on-background mb-2">Availability Settings</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">Manage your standard working hours and schedule time away from the practice.</p>
            </div>
            <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm hover:bg-inverse-surface transition-colors flex items-center gap-2 self-start md:self-auto">
              <span className="material-symbols-outlined text-[20px]">save</span>
              Save Changes
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
              <div className="p-6 border-b border-outline-variant bg-surface-bright">
                <h3 className="text-headline-sm font-headline-sm text-on-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  Standard Weekly Hours
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Set the baseline hours you are available for appointments each week.</p>
              </div>
              <div className="p-6 space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-mon" name="toggle" style={{ top: '2px', borderColor: '#000', right: '0' }} type="checkbox"/>
                      <label className="toggle-label block overflow-hidden h-7 rounded-full bg-primary cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-mon"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-background">Monday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <div className="flex flex-col">
                      <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="09:00"/>
                    </div>
                    <span className="text-on-surface-variant font-body-sm">-</span>
                    <div className="flex flex-col">
                      <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="17:00"/>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-tue" name="toggle" style={{ top: '2px', borderColor: '#000', right: '0' }} type="checkbox"/>
                      <label className="toggle-label block overflow-hidden h-7 rounded-full bg-primary cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-tue"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-background">Tuesday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="09:00"/>
                    <span className="text-on-surface-variant font-body-sm">-</span>
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="17:00"/>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4 bg-surface-container-low -mx-6 px-6">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-wed" name="toggle" style={{ top: '2px', borderColor: '#000', right: '0' }} type="checkbox"/>
                      <label className="toggle-label block overflow-hidden h-7 rounded-full bg-primary cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-wed"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-background">Wednesday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="08:00"/>
                    <span className="text-on-surface-variant font-body-sm">-</span>
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="13:00"/>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-thu" name="toggle" style={{ top: '2px', borderColor: '#000', right: '0' }} type="checkbox"/>
                      <label className="toggle-label block overflow-hidden h-7 rounded-full bg-primary cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-thu"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-background">Thursday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="09:00"/>
                    <span className="text-on-surface-variant font-body-sm">-</span>
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="17:00"/>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-fri" name="toggle" style={{ top: '2px', borderColor: '#000', right: '0' }} type="checkbox"/>
                      <label className="toggle-label block overflow-hidden h-7 rounded-full bg-primary cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-fri"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-background">Friday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="09:00"/>
                    <span className="text-on-surface-variant font-body-sm">-</span>
                    <input className="border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm w-32" type="time" defaultValue="16:00"/>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4 opacity-60">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-sat" name="toggle" style={{ top: '2px', left: '0', borderColor: '#c6c6cd' }} type="checkbox"/>
                      <label className="block overflow-hidden h-7 rounded-full bg-outline-variant cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-sat"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface-variant">Saturday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <span className="font-body-sm text-on-surface-variant italic">Unavailable</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4 opacity-60">
                  <div className="flex items-center gap-4 w-40">
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-all duration-200 ease-in" id="toggle-sun" name="toggle" style={{ top: '2px', left: '0', borderColor: '#c6c6cd' }} type="checkbox"/>
                      <label className="block overflow-hidden h-7 rounded-full bg-outline-variant cursor-pointer transition-colors duration-200 ease-in" htmlFor="toggle-sun"></label>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface-variant">Sunday</span>
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <span className="font-body-sm text-on-surface-variant italic">Unavailable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-gutter">
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
                <div className="p-5 border-b border-outline-variant bg-surface-bright">
                  <h3 className="text-headline-sm font-headline-sm text-on-background flex items-center gap-2">
                    <span className="material-symbols-outlined text-error">event_busy</span>
                    Block Out Dates
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Schedule vacations or unavailable periods.</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Start Date</label>
                    <input className="w-full border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" type="date"/>
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">End Date</label>
                    <input className="w-full border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" type="date"/>
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Reason (Optional)</label>
                    <input className="w-full border border-outline-variant rounded-md px-3 py-2 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" placeholder="e.g., Annual Conference" type="text"/>
                  </div>
                  <button className="w-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-4 py-2 rounded-lg shadow-sm hover:bg-secondary-fixed-dim transition-colors mt-2">
                    Add to Blocked Dates
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
                <div className="p-4 border-b border-outline-variant">
                  <h4 className="font-label-md text-label-md text-on-background">Upcoming Blocked Dates</h4>
                </div>
                <ul className="divide-y divide-outline-variant">
                  <li className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Oct 12 - Oct 15, 2024</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Medical Conference</p>
                    </div>
                    <button className="text-on-surface-variant hover:text-error transition-colors p-1" title="Remove">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </li>
                  <li className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Nov 23 - Nov 26, 2024</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Holiday</p>
                    </div>
                    <button className="text-on-surface-variant hover:text-error transition-colors p-1" title="Remove">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto bg-surface-container-high dark:bg-surface-container mt-stack-lg border-t border-outline-variant">
          <div className="mb-4 md:mb-0">
            <span className="font-headline-sm text-headline-sm text-primary dark:text-on-primary-fixed">MediSync</span>
            <p className="font-body-sm text-body-sm text-on-surface dark:text-on-surface-variant mt-1">© 2024 MediSync Health. Assurance through Clarity.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Cookie Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Contact Support</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
