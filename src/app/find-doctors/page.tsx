import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  
  const { data: doctorsData, error } = await supabase
    .from('doctors')
    .select(`
      *,
      profiles (
        full_name,
        avatar_url
      )
    `);

  const doctors = doctorsData || [];

  return (
    <>
<nav className="bg-surface-container-lowest dark:bg-surface-container-highest shadow-sm flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-50">
<div className="flex items-center gap-8">
<a className="text-headline-md font-headline-md text-primary dark:text-on-primary-fixed" href="#">MediSync</a>
<div className="hidden md:flex gap-6">
<a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">Find Doctors</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">Specialties</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">How it Works</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed-variant transition-colors duration-200 ease-in-out" href="#">Help</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-sm font-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary w-64" placeholder="Search doctors, specialties..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"><span className="material-symbols-outlined">help_outline</span></button>
</div>
<div className="hidden md:flex items-center gap-4 ml-4">
<a href="/login" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors focus:outline-none">Sign In</a>
<a href="/login" className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-colors focus:outline-none">Join as Provider</a>
</div>
</div>
</nav>

<div className="flex-1 max-w-container-max mx-auto w-full px-gutter py-stack-lg flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-[280px] shrink-0 space-y-6">
<div className="bg-surface-container-lowest shadow-sm rounded-xl p-6 border border-outline-variant/30">
<h2 className="font-headline-sm text-headline-sm mb-6 pb-4 border-b border-outline-variant/30">Filters</h2>

<div className="mb-6">
<h3 className="font-label-md text-label-md mb-3 text-on-surface-variant">Specialty</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer">
<input defaultChecked className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Primary Care</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Cardiology</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Dermatology</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Pediatrics</span>
</label>
</div>
</div>

<div className="mb-6">
<h3 className="font-label-md text-label-md mb-3 text-on-surface-variant">Availability</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer">
<input defaultChecked className="text-primary focus:ring-primary border-outline-variant h-4 w-4" name="availability" type="radio"/>
<span className="font-body-sm text-body-sm text-on-surface">Any time</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="text-primary focus:ring-primary border-outline-variant h-4 w-4" name="availability" type="radio"/>
<span className="font-body-sm text-body-sm text-on-surface">Today</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="text-primary focus:ring-primary border-outline-variant h-4 w-4" name="availability" type="radio"/>
<span className="font-body-sm text-body-sm text-on-surface">Next 3 days</span>
</label>
</div>
</div>

<div className="mb-6">
<h3 className="font-label-md text-label-md mb-3 text-on-surface-variant">Minimum Rating</h3>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-outline-variant" style={{"fontVariationSettings":"'FILL' 0"}}>star</span>
<span className="font-body-sm text-body-sm ml-2">&amp; Up</span>
</div>
</div>

<div>
<h3 className="font-label-md text-label-md mb-3 text-on-surface-variant">Insurance</h3>
<select className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body-sm text-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" defaultValue="">
<option value="">I'm paying out of pocket</option>
<option value="aetna">Aetna</option>
<option value="bcbs">Blue Cross Blue Shield</option>
<option value="cigna">Cigna</option>
<option value="uhc">UnitedHealthcare</option>
</select>
</div>
</div>
</aside>

<main className="flex-1">
<div className="flex justify-between items-center mb-6">
<h1 className="font-headline-lg text-headline-lg">Primary Care Providers near you</h1>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Sort by:</span>
<select className="bg-transparent border-none font-label-sm text-label-sm focus:ring-0 cursor-pointer" defaultValue="recommended">
<option value="recommended">Recommended</option>
<option value="availability">Availability</option>
<option value="distance">Distance</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {doctors.length > 0 ? (
    doctors.map((item: any) => (
        <div key={item.id} className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6 flex flex-col hover:shadow-md transition-shadow">
          <div className="flex gap-4 items-start mb-4">
            <img 
              alt="Doctor profile" 
              className="w-20 h-20 rounded-full object-cover border-2 border-surface-container-low" 
              src={item.profiles?.avatar_url || 'https://via.placeholder.com/80'} 
            />
            <div className="flex-1">
              <h3 className="font-headline-sm text-headline-sm">{item.profiles?.full_name}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">{item.specialty}</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-secondary text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                <span className="font-label-sm text-label-sm">{item.rating}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">({item.review_count} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded font-label-sm text-label-sm">{item.clinic_name}</span>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-outline-variant/20">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Expertise:</p>
            <p className="font-body-sm text-body-sm text-on-surface mb-4 line-clamp-2">{item.bio}</p>
            <a href={`/book?doctor=${item.id}`} className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-colors block text-center">View Profile &amp; Book</a>
          </div>
        </div>
      ))
  ) : (
    <div className="col-span-full py-20 text-center bg-surface-container-low rounded-2xl">
        <p className="text-on-surface-variant">No doctors found. Try adjusting your filters or check database connection.</p>
    </div>
  )}
</div>
</main>
</div>

<footer className="bg-surface-container-high dark:bg-surface-container mt-stack-lg w-full py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
<div className="mb-4 md:mb-0 text-center md:text-left">
<span className="font-headline-sm text-headline-sm text-primary dark:text-on-primary-fixed block mb-2">MediSync</span>
<p className="font-body-sm text-body-sm text-on-surface dark:text-on-surface-variant">© 2024 MediSync Health. Assurance through Clarity.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Privacy Policy</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Terms of Service</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Cookie Policy</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary underline decoration-2 transition-all" href="#">Contact Support</a>
</div>
</footer>
</>
  );
}
