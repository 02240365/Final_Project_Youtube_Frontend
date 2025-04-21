// components/ChannelHeader.jsx
// This component renders the channel header with banner, avatar, and subscription button
// It's a reusable component used on the channel page

"use client"

import { useState } from "react"

export default function ChannelHeader({ channel }) {
  // Destructure the channel object for easier access
  const { name, subscribers, description, banner, avatar } = channel

  // State for subscription
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Toggle subscription
  const toggleSubscription = () => {
    setIsSubscribed(!isSubscribed)
  }

  return (
    <div className="channel-header mb-6">
      {/* Channel banner */}
      <div className="relative h-32 md:h-48 bg-gray-200 mb-16">
        {/* In a real app, this would be an actual image */}
        <div className="w-full h-full bg-gray-300"></div>

        {/* Channel avatar (positioned to overlap the banner) */}
        <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
          {/* In a real app, this would be an actual image */}
          <div className="w-full h-full bg-gray-300"></div>
        </div>
      </div>

      {/* Channel info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-6 mt-12 md:mt-0">
        <div>
          <h1 className="text-2xl font-bold mb-1">{name}</h1>
          <p className="text-sm text-gray-600 mb-2">{subscribers}</p>
          <p className="text-sm text-gray-600 hidden md:block">{description}</p>
        </div>

        <button
          onClick={toggleSubscription}
          className={`px-4 py-2 rounded-full ${isSubscribed ? "bg-gray-200 text-gray-800" : "bg-red-600 text-white"}`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      {/* Mobile description */}
      <p className="text-sm text-gray-600 px-6 mt-2 md:hidden">{description}</p>
    </div>
  )
}
