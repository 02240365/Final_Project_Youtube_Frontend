// app/login/page.jsx
// This page provides a login form for user authentication
// It demonstrates a form with client-side validation

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  // State for form inputs and errors
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const router = useRouter()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Reset errors
    setErrors({})

    // Simple validation
    const newErrors = {}
    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"

    // If there are errors, update state and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // In a real application, this would make an API call to authenticate
    // For now, we'll just simulate a successful login and redirect
    console.log("Logging in with:", { email, password })

    // Redirect to home page after "successful" login
    router.push("/")
  }

  return (
    <div className="login-page flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign in to YouTube</h1>
          <p className="mt-2 text-gray-600">Continue to YouTube</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500`}
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500`}
            />
            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-red-600 hover:text-red-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
