export default function Page() {
  return (
    <>


<nav className="bg-surface-container-lowest shadow-sm flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-50">
<div className="flex items-center gap-8">
<a className="text-headline-md font-headline-md text-primary flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
                MediSync
            </a>
<div className="hidden md:flex gap-6">
<a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md duration-200 ease-in-out" href="/find-doctors">Find Doctors</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md duration-200 ease-in-out" href="#">Specialties</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md duration-200 ease-in-out" href="#">How it Works</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md duration-200 ease-in-out" href="#">Help</a>
</div>
</div>
<div className="flex items-center gap-4">
<a href="/login" className="hidden md:block text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">Join as Provider</a>
<a href="/login" className="bg-primary text-on-primary px-6 py-2 rounded font-label-md text-label-md hover:bg-primary-container transition-colors">Sign In</a>
<div className="hidden md:flex gap-4 ml-4">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
</div>
</nav>

<main className="w-full">
<section className="w-full max-w-container-max mx-auto px-gutter py-stack-lg md:py-20 lg:py-32 flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface-container-high via-surface-container-low to-background opacity-50 rounded-[3rem] transform -skew-y-3 scale-110"></div>
<div className="text-center max-w-3xl space-y-stack-md z-10 relative">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-4 shadow-sm border border-outline-variant/20">Assurance through Clarity</span>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight leading-tight">Healthcare at your fingertips.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Find and book appointments with top-rated doctors, specialists, and healthcare providers near you. Simple, transparent, and secure.</p>

<div className="mt-8 md:mt-12 w-full max-w-4xl mx-auto bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/30 p-2 md:p-3 flex flex-col md:flex-row gap-2 relative z-20">
<div className="flex-1 flex items-center bg-background rounded-lg border border-outline-variant focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all px-4 py-3">
<span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
<input className="w-full bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:ring-0 p-0" placeholder="Condition, procedure, or doctor name" type="text"/>
</div>
<div className="hidden md:block w-[1px] bg-outline-variant/30 self-stretch my-2"></div>
<div className="flex-1 flex items-center bg-background rounded-lg border border-outline-variant focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all px-4 py-3">
<span className="material-symbols-outlined text-on-surface-variant mr-3">location_on</span>
<input className="w-full bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:ring-0 p-0" placeholder="City, state, or zip code" type="text"/>
<button className="text-secondary hover:text-on-secondary-container flex items-center justify-center p-1 rounded-full hover:bg-secondary-container/50 transition-colors">
<span className="material-symbols-outlined text-sm">my_location</span>
</button>
</div>
<button className="bg-primary text-on-primary rounded-lg px-8 py-3 md:py-0 font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-2 whitespace-nowrap">
                        Search
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-on-surface-variant font-body-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-base">check_circle</span> Verified Reviews</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-base">check_circle</span> Secure Booking</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-base">check_circle</span> 24/7 Support</span>
</div>
</div>

<div className="w-full max-w-container-max mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
<a className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between h-full min-h-[160px]" href="#">
<div className="flex items-start justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Primary Care</h3>
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined">stethoscope</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Routine checkups and preventive health.</p>
</a>
<a className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between h-full min-h-[160px]" href="#">
<div className="flex items-start justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Dentistry</h3>
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined">dentistry</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Cleanings, exams, and dental procedures.</p>
</a>
<a className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between h-full min-h-[160px]" href="#">
<div className="flex items-start justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Mental Health</h3>
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined">psychology</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Therapy, counseling, and psychiatric care.</p>
</a>
</div>
</section>

<section className="w-full bg-surface-container-low py-stack-lg md:py-24 border-y border-outline-variant/20">
<div className="max-w-container-max mx-auto px-gutter text-center">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">How it works</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-16">Booking your next healthcare appointment is straightforward and secure. Follow these three simple steps.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-outline-variant/30 z-0"></div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 bg-surface-container-lowest rounded-full shadow-sm border border-outline-variant/30 flex items-center justify-center mb-6 text-primary group-hover:text-secondary transition-colors relative">
<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md shadow-sm">1</span>
<span className="material-symbols-outlined text-[40px] text-secondary">search</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Find your doctor</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-[250px] text-center">Search by specialty, location, or insurance to find the perfect match for your needs.</p>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 bg-surface-container-lowest rounded-full shadow-sm border border-outline-variant/30 flex items-center justify-center mb-6 text-primary group-hover:text-secondary transition-colors relative">
<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md shadow-sm">2</span>
<span className="material-symbols-outlined text-[40px] text-secondary">calendar_month</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Pick a time</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-[250px] text-center">View real-time availability and select a convenient time slot that fits your schedule.</p>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 bg-surface-container-lowest rounded-full shadow-sm border border-outline-variant/30 flex items-center justify-center mb-6 text-primary group-hover:text-secondary transition-colors relative">
<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md shadow-sm">3</span>
<span className="material-symbols-outlined text-[40px] text-secondary">check_circle</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Book instantly</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-[250px] text-center">Confirm your appointment securely online and receive helpful reminders.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-high w-full py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto mt-stack-lg border-t border-outline-variant/20">
<div className="mb-4 md:mb-0 text-center md:text-left">
<a className="font-headline-sm text-headline-sm text-primary flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<span className="material-symbols-outlined text-secondary">medical_services</span>
                MediSync
            </a>
<p className="font-body-sm text-body-sm text-on-surface">© 2024 MediSync Health. Assurance through Clarity.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline decoration-2 transition-all" href="#">Privacy Policy</a>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline decoration-2 transition-all" href="#">Terms of Service</a>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline decoration-2 transition-all" href="#">Cookie Policy</a>
<a className="font-body-sm text-body-sm font-bold text-primary hover:underline decoration-2 transition-all transition-colors" href="/sitemap">View All Screens (Sitemap)</a>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline decoration-2 transition-all" href="#">Contact Support</a>
</div>
</footer>

</>
  );
}
