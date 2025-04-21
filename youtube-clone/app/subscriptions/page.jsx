"use client"

// app/subscriptions/page.jsx
// This page displays videos from channels the user has subscribed to
// It demonstrates a protected route that requires authentication

import { redirect } from "next/navigation"
import VideoGrid from "@/components/VideoGrid"

// This function simulates checking if a user is logged in
// In a real application, this would use a proper authentication system
const isUserLoggedIn = () => {
  // For demonstration purposes, we'll assume the user is not logged in
  return false
}

export default function SubscriptionsPage() {
  // Check if the user is logged in
  // If not, redirect to the login page
  if (!isUserLoggedIn()) {
    // In a client component, we would use useRouter().push('/login')
    // But in a server component, we use redirect
    redirect("/login")
  }

  // Sample subscribed videos data that would normally come from an API
  const subscribedVideos = [
    {
      id: "1",
      title: "Critical evaluation of resources",
      channel: "TUTOR THINLEY WANGMO",
      views: "49 views",
      timestamp: "4 days ago",
      thumbnail: "/thumbnails/critical-evaluation.jpg",
    },
    {
      id: "3",
      title: "Top 5 MOST WATCHED AGT 2024 Golden Buzzer Moments!",
      channel: "Talent Replay",
      views: "8.2M views",
      timestamp: "5 months ago",
      thumbnail: "/thumbnails/agt-buzzer.jpg",
    },
    // More videos would be added here
  ]

  return (
    <div className="subscriptions-page">
      <h1 className="text-2xl font-bold mb-4">Subscriptions</h1>

      {/* Grid of videos from subscribed channels */}
      <VideoGrid videos={subscribedVideos} />
    </div>
  )
}
