export default function Page() {
  return (
    <>


<nav className="hidden md:flex flex-col h-full border-r border-outline-variant bg-surface shadow-sm fixed left-0 top-0 h-screen w-[280px] z-40">

<div className="p-gutter flex items-center gap-4 border-b border-outline-variant">
<img alt="Provider Profile Picture" className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="A small, circular profile picture of a professional healthcare provider, wearing a white coat, with a neutral solid background. Clean, high-key lighting, modern corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv9QRZDnhChp_EMMHBRNLD6rDMC4NvcbSM1cpZIQIg6gy35X_sVzTSXxmLS1r2L44ATMqzi3SrGxKyHHew0PmLkhsqrslkar3jrHTEAnGhf2Nfr5u2DVvxEdAi1A6tzMf0hXYvwvJUTSvRQkw-ZLmTb240UnbIbjZQyVPK9m8YJE71pcQsRmbapq2xW74CtpAn-9g2okWn-nlcWjRBd4FZhHcIdG3ucbfCkSfrgh6YzH_6X39Ja4c7vHNbxqVgxC76TNoQB7kdBg"/>
<div>
<h1 className="font-headline-sm text-headline-sm text-primary">MediSync Pro</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Provider Portal</p>
</div>
</div>

<div className="p-4">
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform shadow-sm">
<span className="material-symbols-outlined" data-icon="add" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>add</span>
                New Appointment
            </button>
</div>

<ul className="flex-1 overflow-y-auto py-2">
<li className="px-2 mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
<li className="px-2 mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
                    Appointments
                </a>
</li>
<li className="px-2 mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
                    Schedule
                </a>
</li>
<li className="px-2 mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container-low cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="group" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>group</span>
                    Patients
                </a>
</li>
<li className="px-2 mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
                    Services
                </a>
</li>
<li className="px-2 mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                    Analytics
                </a>
</li>
</ul>

<ul className="p-2 border-t border-outline-variant mt-auto">
<li className="mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
<li className="mb-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                    Logout
                </a>
</li>
</ul>
</nav>

<main className="flex-1 md:ml-[280px] flex flex-col min-h-screen">

<header className="md:hidden flex justify-between items-center p-4 bg-surface border-b border-outline-variant sticky top-0 z-30 shadow-sm">
<h1 className="font-headline-sm text-headline-sm text-primary">MediSync Pro</h1>
<button className="text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</header>
<div className="p-gutter flex-1 max-w-container-max mx-auto w-full">

<div className="mb-stack-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-1">User Management</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Manage providers, patients, and system access.</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col">

<div className="p-4 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-bright">

<div className="flex space-x-1 bg-surface-container-low p-1 rounded-lg w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 rounded-md font-label-md text-label-md bg-surface-container-lowest shadow-sm text-primary border border-outline-variant">All Users</button>
<button className="flex-1 sm:flex-none px-4 py-2 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Providers</button>
<button className="flex-1 sm:flex-none px-4 py-2 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Patients</button>
</div>

<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant transition-colors" placeholder="Search users..." type="text"/>
</div>
<button className="p-2 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center justify-center bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">User</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Role</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold hidden sm:table-cell">Join Date</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Status</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant font-body-sm text-body-sm">

<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold shadow-sm">SJ</div>
<div>
<p className="font-body-md text-body-md font-semibold text-primary">Dr. Sarah Jenkins</p>
<p className="text-on-surface-variant text-xs">sarah.j@example.com</p>
</div>
</div>
</td>
<td className="py-4 px-4 text-on-surface">Provider</td>
<td className="py-4 px-4 text-on-surface-variant hidden sm:table-cell">Oct 24, 2023</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant border border-outline-variant">
<span className="material-symbols-outlined text-[14px]" data-icon="pending">pending</span>
                                        Pending Approval
                                    </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 bg-secondary text-on-secondary rounded text-xs font-semibold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow-sm">Approve</button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container-high rounded transition-colors" title="More options">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<img alt="Patient Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="A small, circular profile picture of a young adult male patient with a friendly expression. Soft, natural lighting, neutral background, modern corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMoyYNz-FZ7u28s-OBMiVWNolIo69zJYIbMRDMqMCvgbRJ24d1_EIe7DJXjezR8dBRBk7dSAgW95OOpGAdnNCfIlyGbYYmKsvMnOEo411uUrJazrayMhkfieX_r92DFWSMJZx9TKDEKLgOS7XzmjQC4fV3sbpxGwJNuBOUXEq83FyZvixqxwGmNnOFwP0tSjvGUJ7vbQ5jsEEFyHDAaJmvHT9tc2KZvuZtuONRJbt-0_t0VCEhwvqlu7PBDVNciH6mkuuNcvEtQg"/>
<div>
<p className="font-body-md text-body-md font-semibold text-primary">Michael Chen</p>
<p className="text-on-surface-variant text-xs">m.chen88@example.com</p>
</div>
</div>
</td>
<td className="py-4 px-4 text-on-surface">Patient</td>
<td className="py-4 px-4 text-on-surface-variant hidden sm:table-cell">Sep 12, 2023</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-fixed text-on-secondary-fixed-variant border border-secondary-fixed-dim">
<span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span>
                                        Active
                                    </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 border border-outline-variant text-on-surface-variant rounded text-xs font-medium hover:bg-surface-container-high transition-colors shadow-sm">View Profile</button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container-high rounded transition-colors" title="More options">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-bold shadow-sm">AL</div>
<div>
<p className="font-body-md text-body-md font-semibold text-primary">Dr. Amanda Lee</p>
<p className="text-on-surface-variant text-xs">a.lee.md@clinic.com</p>
</div>
</div>
</td>
<td className="py-4 px-4 text-on-surface">Provider</td>
<td className="py-4 px-4 text-on-surface-variant hidden sm:table-cell">Jan 05, 2022</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-fixed text-on-secondary-fixed-variant border border-secondary-fixed-dim">
<span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span>
                                        Active
                                    </span>
</td>
<td className="py-4 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 border border-outline-variant text-on-surface-variant rounded text-xs font-medium hover:bg-surface-container-high transition-colors shadow-sm">View Profile</button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container-high rounded transition-colors" title="More options">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-outline-variant flex items-center justify-between bg-surface-bright">
<p className="font-body-sm text-body-sm text-on-surface-variant">Showing <span className="font-medium text-on-surface">1</span> to <span className="font-medium text-on-surface">3</span> of <span className="font-medium text-on-surface">124</span> results</p>
<div className="flex gap-1">
<button className="p-1.5 rounded border border-outline-variant text-outline-variant cursor-not-allowed bg-surface-container-lowest">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="p-1.5 rounded border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

</>
  );
}
