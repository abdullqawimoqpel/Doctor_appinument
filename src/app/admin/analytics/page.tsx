export default function Page() {
  return (
    <>


<nav className="hidden md:flex bg-surface dark:bg-background shadow-sm fixed left-0 top-0 h-screen w-[280px] flex-col border-r border-outline-variant dark:border-on-tertiary-fixed-variant z-40">
<div className="p-gutter flex items-center gap-3 border-b border-outline-variant dark:border-on-tertiary-fixed-variant">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm">
                MB
            </div>
<div>
<h1 className="text-headline-sm font-headline-sm text-primary dark:text-on-primary-fixed">MediSync Pro</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Provider Portal</p>
</div>
</div>
<div className="p-4 flex-grow flex flex-col gap-2 overflow-y-auto">
<button className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 mb-4 hover:bg-on-primary-container transition-colors">
<span className="material-symbols-outlined" data-icon="add" data-weight="fill">add</span>
                New Appointment
            </button>
<ul className="flex flex-col gap-1">

<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<span className="font-body-md text-body-md">Appointments</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
<span className="font-body-md text-body-md">Schedule</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-body-md text-body-md">Patients</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span className="font-body-md text-body-md">Services</span>
</a>
</li>

<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-low text-primary font-bold border-r-4 border-primary dark:text-on-primary-fixed dark:border-on-primary-fixed cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="analytics" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>analytics</span>
<span className="font-body-md text-body-md">Analytics</span>
</a>
</li>
</ul>
</div>
<div className="p-4 border-t border-outline-variant dark:border-on-tertiary-fixed-variant">
<ul className="flex flex-col gap-1">
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-primary-container hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error-container transition-colors cursor-pointer active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-body-md text-body-md">Logout</span>
</a>
</li>
</ul>
</div>
</nav>

<main className="flex-1 ml-0 md:ml-[280px] h-full overflow-y-auto bg-surface-bright flex flex-col">

<header className="md:hidden flex items-center justify-between p-4 bg-surface-container-lowest shadow-sm sticky top-0 z-50">
<div className="flex items-center gap-2">
<button className="text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<span className="font-headline-sm text-headline-sm text-primary">Analytics</span>
</div>
<div className="flex items-center gap-3">
<button className="text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden">
<img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4jRzmX658XbggQU67y8GtckV9rZRpCW3kIOC8qecX6n7mamY-EBoVN2YkYHXhgU_s70DnH1SaOTP1z8fTiF8ya45dESQAVV20T_KNUlF6NV1gWrK1MtosGmx8xH0dGzv8fCqRx8plsaQUBoq7EfRv5s2R4rnDHWQDPQ4pfbiKoScf_QFwuZS-Uo7aGs4e--ruBu2kZ8kjipOGrcNkqq9hwfu168p_eaKyhr4oPnDGu-T6RvVYC4gsKlRqiAWjuIcGohk4OVhF2w"/>
</div>
</div>
</header>
<div className="p-margin-mobile md:p-gutter lg:p-margin-desktop max-w-container-max mx-auto w-full flex-1 flex flex-col gap-stack-lg">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Platform Analytics</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Overview of system performance and user metrics.</p>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<select className="w-full md:w-auto border border-outline-variant rounded-lg px-4 py-2 bg-surface text-on-surface font-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
<option>This Year</option>
</select>
<button className="bg-surface border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors whitespace-nowrap">
<span className="material-symbols-outlined" data-icon="download">download</span>
                        Export
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary-container rounded-lg text-on-primary">
<span className="material-symbols-outlined" data-icon="calendar_today" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_today</span>
</div>
<span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm bg-secondary-container px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
                            12.5%
                        </span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Bookings</p>
<h3 className="font-headline-xl text-headline-xl text-on-surface">8,459</h3>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-secondary-fixed rounded-lg text-on-secondary-fixed">
<span className="material-symbols-outlined" data-icon="person_add" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>person_add</span>
</div>
<span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm bg-secondary-container px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
                            8.2%
                        </span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">New Users</p>
<h3 className="font-headline-xl text-headline-xl text-on-surface">1,240</h3>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-tertiary-container rounded-lg text-on-tertiary">
<span className="material-symbols-outlined" data-icon="payments" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>payments</span>
</div>
<span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_flat">trending_flat</span>
                            0.0%
                        </span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Revenue</p>
<h3 className="font-headline-xl text-headline-xl text-on-surface">$124.5k</h3>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col min-h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Booking Trends</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>

<div className="flex-1 relative flex flex-col justify-end">

<div className="absolute inset-0 flex flex-col justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center w-full border-b border-surface-container pb-1"><span className="w-10">4k</span></div>
<div className="flex items-center w-full border-b border-surface-container pb-1"><span className="w-10">3k</span></div>
<div className="flex items-center w-full border-b border-surface-container pb-1"><span className="w-10">2k</span></div>
<div className="flex items-center w-full border-b border-surface-container pb-1"><span className="w-10">1k</span></div>
<div className="flex items-center w-full pb-1"><span className="w-10">0</span></div>
</div>

<div className="relative z-10 flex justify-around items-end h-[85%] pl-10 pr-2">
<div className="w-8 md:w-12 bg-primary rounded-t-sm h-[40%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">1.6k</div>
</div>
<div className="w-8 md:w-12 bg-primary rounded-t-sm h-[60%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">2.4k</div>
</div>
<div className="w-8 md:w-12 bg-primary rounded-t-sm h-[50%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">2.0k</div>
</div>
<div className="w-8 md:w-12 bg-primary rounded-t-sm h-[80%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">3.2k</div>
</div>
<div className="w-8 md:w-12 bg-primary rounded-t-sm h-[70%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">2.8k</div>
</div>
<div className="w-8 md:w-12 bg-secondary rounded-t-sm h-[90%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">3.6k</div>
</div>
</div>

<div className="flex justify-around items-center pl-10 pr-2 mt-4 font-label-sm text-label-sm text-on-surface-variant">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span className="text-primary font-bold">Sat</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
<a className="text-primary font-label-sm text-label-sm hover:underline" href="#">View All</a>
</div>
<div className="flex-1 flex flex-col gap-4 overflow-y-auto">

<div className="flex gap-3 items-start border-b border-surface-container pb-4">
<div className="p-2 bg-secondary-container rounded-full text-secondary mt-1">
<span className="material-symbols-outlined text-[20px]" data-icon="how_to_reg">how_to_reg</span>
</div>
<div>
<p className="font-body-sm text-body-sm text-on-surface"><span className="font-semibold">Dr. Sarah Jenkins</span> completed onboarding.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">10 mins ago</p>
</div>
</div>

<div className="flex gap-3 items-start border-b border-surface-container pb-4">
<div className="p-2 bg-error-container rounded-full text-error mt-1">
<span className="material-symbols-outlined text-[20px]" data-icon="warning">warning</span>
</div>
<div>
<p className="font-body-sm text-body-sm text-on-surface"><span className="font-semibold">System Alert:</span> High server load detected in US-East region.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">45 mins ago</p>
</div>
</div>

<div className="flex gap-3 items-start border-b border-surface-container pb-4">
<div className="p-2 bg-primary-container rounded-full text-primary mt-1">
<span className="material-symbols-outlined text-[20px]" data-icon="update">update</span>
</div>
<div>
<p className="font-body-sm text-body-sm text-on-surface"><span className="font-semibold">Platform Update v2.4</span> deployed successfully.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">2 hours ago</p>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="p-2 bg-surface-container-high rounded-full text-on-surface mt-1">
<span className="material-symbols-outlined text-[20px]" data-icon="payment">payment</span>
</div>
<div>
<p className="font-body-sm text-body-sm text-on-surface"><span className="font-semibold">Monthly payout</span> initiated for 142 providers.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">5 hours ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

</>
  );
}
