// app/page.jsx
// This is the home page component that displays when users visit the root URL
// It shows a grid of video thumbnails and category filters

import VideoGrid from "@/components/VideoGrid"
import CategoryBar from "@/components/CategoryBar"

export default function HomePage() {
  // Sample video data that would normally come from an API
  // In future assignments, this will be fetched from a backend
  const videos = [
    {
      id: "1",
      title: "Critical evaluation of resources",
      channel: "TUTOR THINLEY WANGMO",
      views: "49 views",
      timestamp: "4 days ago",
      thumbnail: "/thumbnails/critical-evaluation.jpg",
    },
    {
      id: "2",
      title: "A weekend vlog before I leave Samtse 😊 #college #weekendreset #bhutanese #lifeinbhutan #samtse",
      channel: "Tseundu Choki",
      views: "20 views",
      timestamp: "57 minutes ago",
      thumbnail: "/thumbnails/weekend-vlog.jpg",
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

  // Sample categories that would normally come from an API
  const categories = [
    "All",
    "Gaming",
    "Live",
    "Music",
    "Algorithms",
    "AI",
    "News",
    "Audio commentaries",
    "Minecraft modding",
    "Basketball",
    "Trucks",
    "Painting",
    "Presentations",
    "Role-Playing",
  ]

  return (
    <div className="home-page">
      {/* Category filter bar at the top of the home page */}
      <CategoryBar categories={categories} />

      {/* Main video grid displaying all video thumbnails */}
      <VideoGrid videos={videos} />
    </div>
  )
}
