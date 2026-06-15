export default function Page() {
  return (
    <>


<div className="fixed inset-0 z-0 bg-surface flex flex-col blur-sm opacity-50 pointer-events-none">

<header className="flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-50 bg-surface-container-lowest shadow-sm">
<div className="flex items-center gap-4">
<span className="text-headline-md font-headline-md text-primary">MediSync</span>
<nav className="hidden md:flex gap-6 ml-8">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" href="#">Find Doctors</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" href="#">Specialties</a>
</nav>
</div>
</header>

<main className="flex-1 p-gutter max-w-container-max mx-auto w-full">
<h1 className="font-headline-lg text-headline-lg text-primary mb-stack-lg">My Bookings</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">

<div className="bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant h-48"></div>
<div className="bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant h-48"></div>
<div className="bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant h-48"></div>
</div>
</main>
</div>

<div className="fixed inset-0 z-40 bg-on-background/40 backdrop-blur-sm flex items-center justify-center p-margin-mobile md:p-gutter overflow-y-auto">

<div aria-labelledby="modal-title" aria-modal="true" className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] border border-surface-variant w-full max-w-[600px] relative flex flex-col my-auto" role="dialog">

<div className="flex items-center justify-between p-stack-md md:p-stack-lg border-b border-surface-variant sticky top-0 bg-surface-container-lowest rounded-t-xl z-10">
<h2 className="font-headline-md text-headline-md text-primary m-0" id="modal-title">Appointment Details</h2>
<button aria-label="Close modal" className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
</div>

<div className="p-stack-md md:p-stack-lg flex-1 overflow-y-auto">

<div className="flex items-center justify-between mb-stack-lg">
<span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-label-md text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Confirmed
                    </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ref: #MB-2934-KL</span>
</div>

<div className="flex items-start gap-4 p-stack-md bg-surface-container-low rounded-lg border border-surface-variant mb-stack-lg">
<img alt="Doctor Profile" className="w-16 h-16 rounded-full object-cover border-2 border-surface-container-lowest shadow-sm" data-alt="A professional headshot of a female doctor in her 40s wearing a white lab coat over a dark blue scrub top. She has a warm, reassuring smile and glasses, set against a clean, bright, softly lit clinical background. The image style is modern, trustworthy, and high-quality, fitting a premium medical platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmsxKozPFkxKKEr7ZQ_N1HGY4pOdzUMgdfn57yfSq77v-MInC92R764atlYlkv-LFLz-gKMNoTAB1ApAcc6dH9Zma4z0ySMIMaK1Bqx2hX2W0WJkf56zqsYJ7ESugvyT4nkpVPtO2-lUBQR9e45oq9ELj_AtSUBoK1V6lYeB0q3b3yAgCwLTzg5o7v26yION2IjyNdthWaorOL5TCh95U8x_2q76Y5wb2xq91_k07KflXgpNRptl-r54Zhe2fAHamsYrBtK_4MVA"/>
<div className="flex-1">
<h3 className="font-headline-sm text-headline-sm text-primary m-0">Dr. Sarah Jenkins</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Cardiology Specialist</p>
<div className="flex gap-3">
<button aria-label="Call Doctor" className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
<button aria-label="Message Doctor" className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">chat</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg">

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">calendar_month</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Date &amp; Time</p>
<p className="font-body-md text-body-md text-on-surface font-medium">Thursday, Oct 12, 2024</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">10:00 AM - 10:45 AM (EST)</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">videocam</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Consultation Type</p>
<p className="font-body-md text-body-md text-on-surface font-medium">Telehealth Video Call</p>
<a className="font-body-sm text-body-sm text-secondary hover:underline inline-flex items-center gap-1 mt-1" href="#">
                                Join Meeting Link
                                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Patient</p>
<p className="font-body-md text-body-md text-on-surface font-medium">Michael Chen</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Self</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">monitor_heart</span>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Reason for Visit</p>
<p className="font-body-md text-body-md text-on-surface font-medium">Routine Heart Checkup</p>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-stack-md border border-surface-variant mb-stack-md">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">edit_note</span>
<h4 className="font-label-md text-label-md text-primary m-0">Pre-Consultation Notes</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant m-0">
                        Please ensure you have your latest blood pressure readings available for the call. If you have experienced any shortness of breath recently, be prepared to discuss when it occurred.
                    </p>
</div>
</div>

<div className="p-stack-md md:p-stack-lg border-t border-surface-variant bg-surface-container-lowest rounded-b-xl flex flex-col md:flex-row gap-4 justify-end sticky bottom-0 z-10">
<button className="w-full md:w-auto px-6 py-3 rounded-lg font-label-md text-label-md text-error bg-error-container hover:bg-[#ffc2be] transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">cancel</span>
                    Cancel Appointment
                </button>
<button className="w-full md:w-auto px-6 py-3 rounded-lg font-label-md text-label-md text-primary bg-surface-container-highest hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 border border-outline-variant">
<span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                    Reschedule
                </button>
<button className="w-full md:w-auto px-6 py-3 rounded-lg font-label-md text-label-md text-on-primary bg-primary hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Confirm Details
                </button>
</div>
</div>
</div>

</>
  );
}
