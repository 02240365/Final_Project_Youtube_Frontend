import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] })

// Metadata for the application - important for SEO
export const metadata = {
  title: "YouTube Clone",
  description: "A YouTube clone built with Next.js for WEB101 & WEB102 assignments",
    generator: 'v0.dev'
}

// Root layout component that wraps all pages
// This component will be rendered on every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main application layout with sidebar and content area */}
        <div className="flex flex-col min-h-screen">
          {/* Header component with search bar and user controls */}
          <Header />

          <div className="flex flex-1">
            {/* Sidebar navigation component */}
            <Sidebar />

            {/* Main content area where page content will be rendered */}
            <main className="flex-1 p-4 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
