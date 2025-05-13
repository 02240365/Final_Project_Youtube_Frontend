// app/video/[id]/page.jsx
// This is a dynamic route that displays a single video based on the ID parameter
// It demonstrates the use of dynamic routes in Next.js

import { notFound } from "next/navigation"
import VideoPlayer from "@/components/VideoPlayer"
import VideoInfo from "@/components/VideoInfo"
import RelatedVideos from "@/components/RelatedVideos"
import CommentSection from "@/components/CommentSection"

// This function would normally fetch data from an API
// For now, we're using mock data
const getVideoById = (id) => {
  // Mock video database
  const videos = {
    1: {
      id: "1",
      title: "Critical evaluation of resources",
      channel: "TUTOR THINLEY WANGMO",
      channelId: "UC123",
      views: "49 views",
      likes: "15",
      timestamp: "4 days ago",
      description: "Learn how to critically evaluate resources for academic research.",
      videoUrl: "https://example.com/video1.mp4",
      thumbnail: "/thumbnails/critical-evaluation.jpg",
    },
    2: {
      id: "2",
      title: "A weekend vlog before I leave Samtse 😊 #college #weekendreset",
      channel: "Tseundu Choki",
      channelId: "UC456",
      views: "20 views",
      likes: "5",
      timestamp: "57 minutes ago",
      description: "Join me for my last weekend at Samtse College before I leave.",
      videoUrl: "https://example.com/video2.mp4",
      thumbnail: "/thumbnails/weekend-vlog.jpg",
    },
    3: {
      id: "3",
      title: "Top 5 MOST WATCHED AGT 2024 Golden Buzzer Moments!",
      channel: "Talent Replay",
      channelId: "UC789",
      views: "8.2M views",
      likes: "452K",
      timestamp: "5 months ago",
      description: "Watch the most amazing Golden Buzzer moments from America's Got Talent 2024!",
      videoUrl: "https://example.com/video3.mp4",
      thumbnail: "/thumbnails/agt-buzzer.jpg",
    },
  }

  return videos[id]
}

// This function would normally fetch related videos from an API
const getRelatedVideos = (currentVideoId) => {
  // Mock related videos (excluding the current video)
  return Object.values(
    getVideoById(currentVideoId)
      ? {
          1: getVideoById("1"),
          2: getVideoById("2"),
          3: getVideoById("3"),
        }
      : {},
  ).filter((video) => video.id !== currentVideoId)
}

export default function VideoPage({ params }) {
  // Extract the video ID from the URL parameters
  const { id } = params

  // Get the video data based on the ID
  const video = getVideoById(id)

  // If the video doesn't exist, show the not found page
  if (!video) {
    notFound()
  }

  // Get related videos to show in the sidebar
  const relatedVideos = getRelatedVideos(id)

  // Sample comments data
  const comments = [
    {
      id: "c1",
      user: "User123",
      text: "Great video! Very informative.",
      timestamp: "2 days ago",
      likes: 5,
    },
    {
      id: "c2",
      user: "VideoFan",
      text: "I learned so much from this, thanks for sharing!",
      timestamp: "1 day ago",
      likes: 3,
    },
  ]

  return (
    <div className="video-page grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        {/* Video player component */}
        <VideoPlayer videoUrl={video.videoUrl} thumbnail={video.thumbnail} />

        {/* Video information (title, channel, likes, etc.) */}
        <VideoInfo video={video} />

        {/* Comment section */}
        <CommentSection comments={comments} />
      </div>

      <div className="lg:col-span-1">
        {/* Related videos sidebar */}
        <RelatedVideos videos={relatedVideos} />
      </div>
    </div>
  )
}
