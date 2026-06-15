export default function Page() {
  return (
    <>


<header className="bg-surface-container-lowest shadow-sm flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-50">
<div className="flex items-center gap-2">
<button aria-label="Go back" className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors duration-200 ease-in-out">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<div className="text-headline-md font-headline-md text-primary">MediSync</div>
</div>
<div className="font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors duration-200 ease-in-out">
<span className="material-symbols-outlined">close</span>
</div>
</header>
<main className="flex-grow flex items-center justify-center p-margin-mobile md:p-margin-desktop">
<div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-gutter md:p-stack-lg">
<div className="text-center mb-stack-lg">
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">How was your visit?</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Your feedback helps us improve our care and services.</p>
</div>

<div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-lg mb-stack-lg border border-surface-variant">
<img alt="Doctor Avatar" className="w-16 h-16 rounded-full object-cover shadow-sm" data-alt="A professional headshot of a friendly female doctor in a modern, brightly lit clinical setting. She wears a clean white coat over a light blue shirt, exuding assurance and clarity. The lighting is soft and even, highlighting a trustworthy expression. The background is a slightly out-of-focus, sterile but welcoming hospital corridor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCugDASHKPitGruATCb4HXMctjkwZotoFzFnYJHYKrF9dR4iYk2WO-r5jQ9EZOowu3ukrcXqObesnUKfo04afLH4GCpLc8UpNGszZz8jAGjYPP6P1pBrI_uuNcU1tiHw8vJ9RqId7dmbcN3IbMTsj4P7C2N1ie9lM1y-0htFjafmpdMi7St5fbUdFHUVa51JYZhcbwgQJ3ODn5Ajw99e_93mBSD8yPQ6_BMsjtHn4d5RJ3TbHcDhBKZEmYiAOhE1UwhFifqMjFdnQ"/>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Dr. Sarah Jenkins</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cardiology Consultation • Oct 24, 2023</p>
</div>
</div>
<form action="#" method="POST">

<div className="mb-stack-lg text-center">
<label className="block font-label-md text-label-md text-on-surface mb-stack-sm">Overall Rating</label>
<div className="flex justify-center gap-2">

<button aria-label="Rate 1 star" className="text-outline hover:text-secondary transition-colors" type="button">
<span className="material-symbols-outlined text-4xl filled text-secondary">star</span>
</button>

<button aria-label="Rate 2 stars" className="text-outline hover:text-secondary transition-colors" type="button">
<span className="material-symbols-outlined text-4xl filled text-secondary">star</span>
</button>

<button aria-label="Rate 3 stars" className="text-outline hover:text-secondary transition-colors" type="button">
<span className="material-symbols-outlined text-4xl filled text-secondary">star</span>
</button>

<button aria-label="Rate 4 stars" className="text-outline hover:text-secondary transition-colors" type="button">
<span className="material-symbols-outlined text-4xl filled text-secondary">star</span>
</button>

<button aria-label="Rate 5 stars" className="text-outline hover:text-secondary transition-colors" type="button">
<span className="material-symbols-outlined text-4xl">star</span>
</button>
</div>
</div>

<div className="mb-stack-lg">
<label className="block font-label-md text-label-md text-on-surface mb-stack-sm">What stood out? (Optional)</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="tags" type="checkbox" defaultValue="Punctuality"/>
<div className="px-4 py-2 rounded-full border border-outline-variant font-body-sm text-body-sm text-on-surface-variant peer-defaultChecked:bg-secondary-container peer-defaultChecked:text-on-secondary-container peer-defaultChecked:border-secondary transition-all">
                                Punctuality
                            </div>
</label>
<label className="cursor-pointer">
<input defaultChecked className="peer sr-only" name="tags" type="checkbox" defaultValue="Bedside Manner"/>
<div className="px-4 py-2 rounded-full border border-outline-variant font-body-sm text-body-sm text-on-surface-variant peer-defaultChecked:bg-secondary-container peer-defaultChecked:text-on-secondary-container peer-defaultChecked:border-secondary transition-all">
                                Bedside Manner
                            </div>
</label>
<label className="cursor-pointer">
<input defaultChecked className="peer sr-only" name="tags" type="checkbox" defaultValue="Clear Communication"/>
<div className="px-4 py-2 rounded-full border border-outline-variant font-body-sm text-body-sm text-on-surface-variant peer-defaultChecked:bg-secondary-container peer-defaultChecked:text-on-secondary-container peer-defaultChecked:border-secondary transition-all">
                                Clear Communication
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="tags" type="checkbox" defaultValue="Facility Cleanliness"/>
<div className="px-4 py-2 rounded-full border border-outline-variant font-body-sm text-body-sm text-on-surface-variant peer-defaultChecked:bg-secondary-container peer-defaultChecked:text-on-secondary-container peer-defaultChecked:border-secondary transition-all">
                                Facility Cleanliness
                            </div>
</label>
</div>
</div>

<div className="mb-stack-lg">
<label className="block font-label-md text-label-md text-on-surface mb-stack-sm" htmlFor="experience">Share your experience</label>
<textarea className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md text-body-md text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none placeholder-on-surface-variant" id="experience" name="experience" placeholder="Tell us more about your visit..." rows={4}></textarea>
</div>

<div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
<button className="flex-1 py-3 px-6 rounded-lg border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors" type="button">
                        Skip for now
                    </button>
<button className="flex-1 py-3 px-6 rounded-lg bg-primary font-label-md text-label-md text-on-primary hover:bg-on-surface-variant transition-colors shadow-sm" type="submit">
                        Submit Feedback
                    </button>
</div>
</form>
</div>
</main>

<footer className="bg-surface-container-high py-stack-md px-gutter text-center">
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MediSync Health. Assurance through Clarity.</p>
</footer>

</>
  );
}
