"use client"

// components/Sidebar.jsx
// This component renders the sidebar navigation menu
// It's a reusable component that appears on all pages

import Link from "next/link"
import { usePathname } from "next/navigation"

// This component must be a client component to use usePathname
export default function Sidebar() {
  // Get the current path to highlight the active link
  const pathname = usePathname()

  // Define the navigation items
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { name: "Shorts", path: "/shorts", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    {
      name: "Subscriptions",
      path: "/subscriptions",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    { name: "You", path: "/you", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  ]

  // Define the library items (would be expanded in a real application)
  const libraryItems = [
    { name: "History", path: "/history", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    {
      name: "Your Videos",
      path: "/your-videos",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    { name: "Watch Later", path: "/playlist?list=WL", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    {
      name: "Liked Videos",
      path: "/playlist?list=LL",
      icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
    },
  ]

  // Define the subscription items (would come from an API in a real application)
  const subscriptionItems = [
    { name: "TUTOR THINLEY WANGMO", path: "/channel/UC123", avatar: "/avatars/channel1-avatar.jpg" },
    { name: "Tseundu Choki", path: "/channel/UC456", avatar: "/avatars/channel2-avatar.jpg" },
    { name: "Talent Replay", path: "/channel/UC789", avatar: "/avatars/channel3-avatar.jpg" },
  ]

  return (
    <aside className="w-64 h-[calc(100vh-56px)] overflow-y-auto hidden md:block bg-white">
      <nav className="py-2">
        {/* Main navigation */}
        <ul className="mb-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center px-4 py-2 text-sm ${
                  pathname === item.path ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Library section */}
        <div className="border-t border-gray-200 pt-4 mb-4">
          <h3 className="px-4 mb-2 text-lg font-medium">Library</h3>
          <ul>
            {libraryItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2 text-sm ${
                    pathname === item.path ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscriptions section */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="px-4 mb-2 text-lg font-medium">Subscriptions</h3>
          <ul>
            {subscriptionItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2 text-sm ${
                    pathname === item.path ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-4 bg-gray-200">
                    {/* In a real app, this would be an actual image */}
                    <div className="w-full h-full bg-gray-300"></div>
                  </div>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
