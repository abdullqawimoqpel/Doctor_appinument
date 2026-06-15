import Link from 'next/link';

const screens = [
  {
    category: 'General',
    items: [
      { title: 'Landing Page', route: '/', description: 'Main entry point for patients and providers.' },
      { title: 'Find Doctors', route: '/find-doctors', description: 'Search and filter healthcare providers.' },
      { title: 'Book Appointment', route: '/book', description: 'Scheduling flow for patients.' },
    ],
  },
  {
    category: 'Patient Portal',
    items: [
      { title: 'My Bookings', route: '/patient/my-bookings', description: 'Overview of patient scheduled appointments.' },
      { title: 'Booking Details', route: '/patient/booking-details', description: 'Detailed view of a specific appointment.' },
      { title: 'Rate Your Visit', route: '/patient/rate-visit', description: 'Feedback and rating system post-consultation.' },
    ],
  },
  {
    category: 'Provider Portal',
    items: [
      { title: 'Schedule', route: '/provider/schedule', description: 'Weekly view of doctor appointments.' },
      { title: 'Availability', route: '/provider/availability', description: 'Manage working hours and time slots.' },
      { title: 'Services', route: '/provider/services', description: 'Management of medical services offered.' },
      { title: 'Telehealth', route: '/provider/telehealth', description: 'Virtual consultation interface.' },
    ],
  },
  {
    category: 'Administration',
    items: [
      { title: 'Platform Analytics', route: '/admin/analytics', description: 'Data visualization and health metrics.' },
      { title: 'User Management', route: '/admin/users', description: 'Control and audit platform users.' },
    ],
  },
  {
    category: 'Profiles',
    items: [
      { title: 'Doctor Profile', route: '/doctor/sarah-jenkins', description: 'Individual provider public profile.' },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-surface-container-low py-12 px- gutter">
      <div className="max-w-container-max mx-auto px-gutter">
        <header className="mb-12 text-center">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">MediSync Sitemap</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Access all 13 production-ready screens generated for the MediSync Appointment Booking platform.
          </p>
        </header>

        <div className="space-y-12">
          {screens.map((group) => (
            <section key={group.category}>
              <h2 className="font-headline-md text-headline-md text-secondary mb-6 border-b border-outline-variant pb-2">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <Link
                    key={item.route}
                    href={item.route}
                    className="block group bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-outline-variant text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline font-label-md">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
}
