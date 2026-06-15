export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p- gutter text-center">
      <h1 className="text-display-md font-headline-md text-error mb-4">Unauthorized</h1>
      <p className="text-body-lg text-on-surface-variant max-w-md mx-auto">
        You do not have permission to access this page. Please contact support if you believe this is an error.
      </p>
      <a href="/" className="mt-8 bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md">
        Back to Home
      </a>
    </div>
  )
}
