'use client';

import { createClient } from '@/utils/supabase/client';

export default function ProviderTelehealth({ userId }: { userId: string }) {
  const supabase = createClient();

  return (
    <>
      <nav className="fixed left-0 top-0 h-screen w-[280px] bg-surface shadow-sm flex flex-col border-r border-outline-variant z-50">
        <div className="px-gutter py-stack-lg flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
          </div>
          <div>
            <h1 className="text-headline-sm font-headline-sm text-primary">MediSync Pro</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Provider Portal</p>
          </div>
        </div>
        <div className="px-gutter pb-stack-lg">
          <a href="/book" className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined">add</span>
            New Appointment
          </a>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col gap-1 px-4">
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/schedule">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/schedule">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="font-body-md text-body-md">Appointments</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/availability">
            <span className="material-symbols-outlined">event_available</span>
            <span className="font-body-md text-body-md">Schedule</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="/provider/services">
            <span className="material-symbols-outlined">medical_services</span>
            <span className="font-body-md text-body-md">Services</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg bg-surface-container-low text-primary font-bold border-r-4 border-primary" href="/provider/telehealth">
            <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>videocam</span>
            <span className="font-body-md text-body-md">Telehealth</span>
          </a>
        </div>
        <div className="p-4 border-t border-outline-variant flex flex-col gap-1">
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </a>
          <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors w-full" onClick={async () => { await supabase.auth.signOut(); window.location.href = '/login'; }}>
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md text-body-md">Logout</span>
          </button>
        </div>
      </nav>

      <main className="ml-[280px] flex-1 flex h-full">
        <section className="flex-1 bg-surface-container p-gutter flex flex-col relative">
          <div className="flex-1 rounded-xl overflow-hidden shadow-sm relative border border-outline-variant bg-surface-container-lowest">
            <img alt="Patient Video Feed" className="w-full h-full object-cover" data-alt="A close-up, highly professional view of a young female patient participating in a telehealth video call, looking directly at the camera with a calm expression. The patient is illuminated by soft, natural window light in a tidy, modern home office setting. The overall mood is clinical yet reassuring, fitting a high-quality medical application. Light-mode aesthetic with bright, airy tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCirPDKudSDZAyUOcrnasBuNpNc26tfUfQoGeVMP6-6rKJ8vnNiScooHPHGy1mu1uHLwR5BQLhnSRT_uUIRybu63a7oUPavHAWAhE9lpdW5DEINSt-Qsj38m3NELnbvvrtFMYxyrcONO6H3Sr_950ZQuDcSW2e_LXPJ1eW6AOwZbAg_p1haQOe50Zjd1O25mPhnoGEkq_iPDxctwOjXeTtZlSR__6SMhnzVknkLQov9Vf_Nq4oEu94OUKMvSDIIlRQKoBCop2MM4g"/>

            <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-outline-variant">
              <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
              <span className="font-label-sm text-label-sm text-on-surface">Live Consultation • 12:45</span>
            </div>

            <div className="absolute bottom-28 right-6 w-64 aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-surface-container-lowest z-10">
              <img alt="Provider Self View" className="w-full h-full object-cover" data-alt="A professional headshot of a male doctor in a white coat wearing a stethoscope, looking attentive during a video consultation. The lighting is bright and even, typical of a modern clinical office or high-end webcam setup. The background is slightly blurred but suggests a clean medical environment. The color palette emphasizes crisp whites and subtle cool tones to match a healthcare interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoPD7PJuuLXFERINNNeFHxDXoV10GAqTgJ3In9jq9iYMI9unLj1i3iDqP-QK7RZ_32R9_A9Bced8DdaMxcpuTYp7C0oPyWQ_Ii6NMaOTnab4BQxuPmT2joCGEHTBDeExUJ761EGSeccXFEM7tbclROXi0qwzV0Hk4sBHypdd0uozca_IVQU3C2XKCO6SGIfp0dNyfJbsU7EMriY50oQdF07_BvGzw3zLcmRccj-r_YCfbumkoREfGCxHXYIg_QgEhViExkRSJbAw"/>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-surface-container-lowest shadow-lg rounded-full px-8 py-4 flex items-center gap-6 border border-outline-variant z-20">
              <button className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors group" title="Mute">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">mic</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors group" title="Stop Video">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">videocam</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors group" title="Share Screen">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">present_to_all</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors group relative" title="Chat">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat</span>
                <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-surface-container-lowest"></span>
              </button>
              <div className="w-px h-8 bg-outline-variant mx-2"></div>
              <button className="bg-error text-on-error font-label-md text-label-md px-6 py-3 rounded-full hover:bg-[#93000a] transition-colors shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>call_end</span>
                End Consultation
              </button>
            </div>
          </div>
        </section>

        <aside className="w-[420px] bg-surface-container-lowest border-l border-outline-variant shadow-sm flex flex-col h-full z-10 overflow-hidden">
          <div className="px-gutter py-6 border-b border-outline-variant bg-surface-bright flex justify-between items-center">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Patient Details</h2>
            <button className="text-primary hover:bg-surface-variant p-2 rounded-full transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col p-gutter gap-stack-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-variant flex-shrink-0">
                <img alt="Patient Avatar" className="w-full h-full object-cover" data-alt="A close up portrait of the same young female patient from the video feed, smiling softly against a clean white background. Used as a tiny avatar thumbnail. Bright lighting, modern clinical UI style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQLCW9ktm8f-NMyuTCtQkE_KdwkhafQehY8wyROvLQvrhI90yH7JhA3ITm312fuPz5SyaEHWQoE5uMt5fqpuw4gcXUBWrBofJyTVoxIXwM0UDl3iB_BuRD2ZcQ0HQ3M0Zw2-wk9lp0T5BU3DUhv2JA4PQQJtnGof8vgZKCGxvg0TxoXdYkGzCDPKZeuhPhHF14JsTc45bfBLa4etdZ4kaTDJg5M8fdgi0Bns191u_Tyz8Eh7YQ53QmGtAJYBC_0B4qQs0Z29XUhw"/>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Sarah Jenkins</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">DOB: Oct 12, 1988 (35 y/o)</p>
                <div className="mt-1 inline-flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full border border-outline-variant">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface">Established Patient</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-surface p-3 rounded-lg border border-outline-variant">
                <p className="font-label-sm text-label-sm text-on-surface-variant">Blood Type</p>
                <p className="font-label-md text-label-md text-on-surface mt-1">A+</p>
              </div>
              <div className="bg-surface p-3 rounded-lg border border-outline-variant">
                <p className="font-label-sm text-label-sm text-on-surface-variant">Weight</p>
                <p className="font-label-md text-label-md text-on-surface mt-1">142 lbs</p>
              </div>
              <div className="bg-surface p-3 rounded-lg border border-outline-variant">
                <p className="font-label-sm text-label-sm text-on-surface-variant">Height</p>
                <p className="font-label-md text-label-md text-on-surface mt-1">5'6"</p>
              </div>
            </div>

            <div className="bg-error-container p-4 rounded-xl border border-error/20">
              <div className="flex items-center gap-2 mb-2 text-on-error-container">
                <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
                <h4 className="font-label-md text-label-md">Chief Complaint</h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-error-container">Persistent migraine over the last 48 hours, accompanied by mild nausea and sensitivity to light. Previous medication (Sumatriptan) not fully effective.</p>
            </div>

            <div>
              <h4 className="font-label-md text-label-md text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">history</span>
                Recent History
              </h4>
              <ul className="space-y-3 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant">
                <li className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="font-label-sm text-label-sm text-on-surface">Neurology Follow-up</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 15, 2023 - Dr. Chen</p>
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container border-2 border-outline-variant flex items-center justify-center"></span>
                  <p className="font-label-sm text-label-sm text-on-surface">Prescription Refill</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Aug 02, 2023 - Sumatriptan 50mg</p>
                </li>
              </ul>
            </div>

            <div className="flex-1 flex flex-col mt-4">
              <h4 className="font-label-md text-label-md text-on-surface mb-2">Consultation Notes</h4>
              <div className="flex-1 border border-outline-variant rounded-xl flex flex-col overflow-hidden bg-surface-bright focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-shadow">
                <div className="bg-surface-container-low border-b border-outline-variant p-2 flex items-center gap-1">
                  <button className="p-1.5 rounded hover:bg-surface-variant text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-variant text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">format_italic</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-variant text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
                  <div className="w-px h-4 bg-outline-variant mx-1"></div>
                  <button className="p-1.5 rounded hover:bg-surface-variant text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">attach_file</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-variant text-on-surface-variant transition-colors ml-auto"><span className="material-symbols-outlined text-[20px]">mic</span></button>
                </div>
                <textarea className="flex-1 w-full p-3 font-body-md text-body-md text-on-surface bg-transparent border-none focus:ring-0 resize-none placeholder-outline" placeholder="Start typing clinical notes here..."></textarea>
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button className="px-4 py-2 rounded-lg font-label-md text-label-md text-primary border border-outline-variant hover:bg-surface-variant transition-colors">Save Draft</button>
                <button className="px-4 py-2 rounded-lg font-label-md text-label-md bg-secondary text-on-secondary hover:bg-[#005049] transition-colors shadow-sm">Sign &amp; Complete</button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
