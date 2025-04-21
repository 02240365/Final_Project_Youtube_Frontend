// app/not-found.jsx
// This is a custom 404 page that displays when a route is not found
// It provides a better user experience than the default 404 page

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
        Go to Homepage
      </Link>
    </div>
  )
}
