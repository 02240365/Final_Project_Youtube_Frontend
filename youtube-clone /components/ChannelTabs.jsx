// components/ChannelTabs.jsx
// This component renders the channel navigation tabs
// It's a reusable component used on the channel page

"use client"

import { useState } from "react"

export default function ChannelTabs() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("videos")

  // Define the tabs
  const tabs = [
    { id: "videos", label: "Videos" },
    { id: "shorts", label: "Shorts" },
    { id: "live", label: "Live" },
    { id: "playlists", label: "Playlists" },
    { id: "community", label: "Community" },
    { id: "channels", label: "Channels" },
    { id: "about", label: "About" },
  ]

  return (
    <div className="channel-tabs border-b border-gray-200 mb-6">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
