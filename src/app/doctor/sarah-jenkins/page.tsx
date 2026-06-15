export default function Page() {
  return (
    <>


<header className="bg-surface-container-lowest dark:bg-surface-container-highest shadow-sm flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-50">
<div className="flex items-center gap-6">
<h1 className="text-headline-md font-headline-md text-primary dark:text-on-primary-fixed">MediSync</h1>
<nav className="hidden md:flex gap-6 items-center">
<a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md duration-200 ease-in-out" href="#">Find Doctors</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-label-md text-label-md hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">Specialties</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-label-md text-label-md hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">How it Works</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-label-md text-label-md hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">Help</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2">
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>help_outline</span>
</button>
</div>
<button className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors px-4 py-2">Join as Provider</button>
<button className="bg-primary text-on-primary font-label-md text-label-md rounded px-6 py-2 hover:bg-inverse-surface transition-colors shadow-sm">Sign In</button>
</div>
</header>
<main className="max-w-container-max mx-auto px-gutter py-stack-lg">

<div className="mb-stack-md flex items-center gap-2 text-on-surface-variant">
<button className="flex items-center hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm mr-1">arrow_back</span>
<span className="font-label-sm text-label-sm">Back to Search</span>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 flex flex-col gap-stack-lg">

<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-stack-lg flex flex-col sm:flex-row gap-stack-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed-dim/20 rounded-bl-full -z-10"></div>
<div className="flex-shrink-0 relative">
<img alt="Doctor Profile Portrait" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-surface shadow-sm" data-alt="A professional studio portrait of a confident female doctor in her late 30s. She is wearing a crisp white lab coat over a professional blue blouse, with a stethoscope draped around her neck. The lighting is soft, high-key, and even, typical of a modern corporate medical profile. The background is a clean, out-of-focus modern clinical setting with cool, assuring tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgpsBvJYxJwFmdUzKB5xc6ipkJ8z5kcTZZqG8gRKNwdCkF3UcNmy5joggGyVYl0UdJdEP31ii6wyn0M6t89BOFmxpHIYYD9u7FxtSCc3LwzmYxG48ZhXLuXux9k7IGEQHLLutaaukcIhDOo7h5JLyQExAz-TNCTnuSHnb717XqgUUFkuUAn1WZ4Yjui54iL0t0hD11G3saQCBIQvDg7-e7CxHa62nBnO8KhQj32qPwfek-X1Ye510zx9ttXiylecdA9zCm032Gcg"/>
<div className="absolute bottom-2 right-2 bg-secondary text-on-secondary rounded-full p-1 shadow-sm flex items-center justify-center border-2 border-surface" title="Verified Provider">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
</div>
<div className="flex flex-col justify-center flex-grow">
<div className="flex items-start justify-between">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Dr. Sarah Jenkins, MD</h2>
<p className="font-body-lg text-body-lg text-secondary font-medium mb-3">Cardiology Specialist</p>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-4">
<span className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant/20">
<span className="material-symbols-outlined text-[16px]">school</span> Harvard Medical School
                            </span>
<span className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant/20">
<span className="material-symbols-outlined text-[16px]">work</span> 15+ Years Exp.
                            </span>
<span className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant/20">
<span className="material-symbols-outlined text-[16px]">location_on</span> Metro General Hospital
                            </span>
</div>
<div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4 mt-auto">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-md text-label-md">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">(128 Reviews)</span>
</div>
<div className="w-px h-4 bg-outline-variant/50"></div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">group</span>
<span className="font-body-sm text-body-sm">Accepting New Patients</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">

<div className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/20 p-6 md:col-span-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person</span>
                            About Dr. Jenkins
                        </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Dr. Sarah Jenkins is a board-certified cardiologist dedicated to providing comprehensive cardiovascular care. With over 15 years of clinical experience, she specializes in preventive cardiology, heart failure management, and echocardiography. She believes in a patient-centered approach, combining the latest medical advancements with compassionate care to ensure the best possible outcomes for her patients.
                        </p>
</div>

<div className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/20 p-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">medical_services</span>
                            Specialties
                        </h3>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container text-on-surface px-3 py-1.5 rounded font-body-sm text-body-sm border border-outline-variant/20">Preventive Cardiology</span>
<span className="bg-surface-container text-on-surface px-3 py-1.5 rounded font-body-sm text-body-sm border border-outline-variant/20">Echocardiography</span>
<span className="bg-surface-container text-on-surface px-3 py-1.5 rounded font-body-sm text-body-sm border border-outline-variant/20">Heart Failure</span>
<span className="bg-surface-container text-on-surface px-3 py-1.5 rounded font-body-sm text-body-sm border border-outline-variant/20">Hypertension Management</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/20 p-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">health_and_safety</span>
                            Accepted Insurance
                        </h3>
<ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> Blue Cross Blue Shield</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> Aetna</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> Medicare</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> UnitedHealthcare</li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-4 relative">
<div className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.1)] border border-outline-variant/30 p-6 sticky top-[100px]">
<div className="mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Book an Appointment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Select a time for a clinic visit</p>
</div>

<div className="flex items-center justify-between mb-4 bg-surface-container-low rounded-lg p-2 border border-outline-variant/20">
<button className="p-1 rounded hover:bg-surface-variant transition-colors text-on-surface-variant"><span className="material-symbols-outlined">chevron_left</span></button>
<span className="font-label-md text-label-md text-on-surface">Today, Oct 24</span>
<button className="p-1 rounded hover:bg-surface-variant transition-colors text-on-surface-variant"><span className="material-symbols-outlined">chevron_right</span></button>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<button className="bg-surface border border-outline-variant/30 hover:border-secondary hover:bg-secondary-fixed/10 text-on-surface font-body-md text-body-md py-3 rounded transition-all duration-200 text-center">
                            09:00 AM
                        </button>
<button className="bg-secondary text-on-secondary font-label-md text-label-md py-3 rounded shadow-sm transition-all duration-200 text-center border border-secondary relative overflow-hidden">
<span className="relative z-10">09:30 AM</span>
<div className="absolute inset-0 bg-white/20"></div>
</button>
<button className="bg-surface border border-outline-variant/30 hover:border-secondary hover:bg-secondary-fixed/10 text-on-surface font-body-md text-body-md py-3 rounded transition-all duration-200 text-center">
                            10:30 AM
                        </button>
<button className="bg-surface border border-outline-variant/30 text-on-surface-variant/50 font-body-md text-body-md py-3 rounded cursor-not-allowed text-center" disabled>
                            11:00 AM
                        </button>
<button className="bg-surface border border-outline-variant/30 hover:border-secondary hover:bg-secondary-fixed/10 text-on-surface font-body-md text-body-md py-3 rounded transition-all duration-200 text-center">
                            01:00 PM
                        </button>
<button className="bg-surface border border-outline-variant/30 hover:border-secondary hover:bg-secondary-fixed/10 text-on-surface font-body-md text-body-md py-3 rounded transition-all duration-200 text-center">
                            02:30 PM
                        </button>
</div>

<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-lg shadow-sm hover:bg-inverse-surface transition-colors flex justify-center items-center gap-2">
                        Continue to Booking
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-4">
                        Free cancellation up to 24 hours prior.
                    </p>
</div>
</div>
</div>
</main>

<footer className="w-full py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto bg-surface-container-high dark:bg-surface-container mt-stack-lg">
<div className="mb-4 md:mb-0 text-center md:text-left">
<span className="font-headline-sm text-headline-sm text-primary dark:text-on-primary-fixed block mb-2">MediSync</span>
<span className="font-body-sm text-body-sm text-on-surface dark:text-on-surface-variant">© 2024 MediSync Health. Assurance through Clarity.</span>
</div>
<nav className="flex flex-wrap justify-center gap-6">
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Privacy Policy</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Terms of Service</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Cookie Policy</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Contact Support</a>
</nav>
</footer>

</>
  );
}
