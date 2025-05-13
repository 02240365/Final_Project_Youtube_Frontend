// app/channel/[id]/page.jsx
// This is a dynamic route that displays a channel page based on the channel ID
// It demonstrates another use of dynamic routes in Next.js

import { notFound } from "next/navigation"
import ChannelHeader from "@/components/ChannelHeader"
import ChannelTabs from "@/components/ChannelTabs"
import VideoGrid from "@/components/VideoGrid"

// This function would normally fetch channel data from an API
const getChannelById = (id) => {
  // Mock channel database
  const channels = {
    UC123: {
      id: "UC123",
      name: "TUTOR THINLEY WANGMO",
      subscribers: "1.2K subscribers",
      description: "Educational content for students.",
      banner: "/banners/channel1-banner.jpg",
      avatar: "/avatars/channel1-avatar.jpg",
    },
    UC456: {
      id: "UC456",
      name: "Tseundu Choki",
      subscribers: "500 subscribers",
      description: "Lifestyle and college vlogs.",
      banner: "/banners/channel2-banner.jpg",
      avatar: "/avatars/channel2-avatar.jpg",
    },
    UC789: {
      id: "UC789",
      name: "Talent Replay",
      subscribers: "5.4M subscribers",
      description: "The best moments from talent shows around the world.",
      banner: "/banners/channel3-banner.jpg",
      avatar: "/avatars/channel3-avatar.jpg",
    },
  }

  return channels[id]
}

// This function would normally fetch channel videos from an API
const getChannelVideos = (channelId) => {
  // Mock videos for each channel
  const channelVideos = {
    UC123: [
      {
        id: "1",
        title: "Critical evaluation of resources",
        channel: "TUTOR THINLEY WANGMO",
        views: "49 views",
        timestamp: "4 days ago",
        thumbnail: "/thumbnails/critical-evaluation.jpg",
      },
      {
        id: "4",
        title: "Research Methods: Literature Review",
        channel: "TUTOR THINLEY WANGMO",
        views: "102 views",
        timestamp: "1 week ago",
        thumbnail: "/thumbnails/research-methods.jpg",
      },
    ],
    UC456: [
      {
        id: "2",
        title: "A weekend vlog before I leave Samtse 😊 #college",
        channel: "Tseundu Choki",
        views: "20 views",
        timestamp: "57 minutes ago",
        thumbnail: "/thumbnails/weekend-vlog.jpg",
      },
    ],
    UC789: [
      {
        id: "3",
        title: "Top 5 MOST WATCHED AGT 2024 Golden Buzzer Moments!",
        channel: "Talent Replay",
        views: "8.2M views",
        timestamp: "5 months ago",
        thumbnail: "/thumbnails/agt-buzzer.jpg",
      },
    ],
  }

  return channelVideos[channelId] || []
}

export default function ChannelPage({ params }) {
  // Extract the channel ID from the URL parameters
  const { id } = params

  // Get the channel data based on the ID
  const channel = getChannelById(id)

  // If the channel doesn't exist, show the not found page
  if (!channel) {
    notFound()
  }

  // Get videos for this channel
  const videos = getChannelVideos(id)

  return (
    <div className="channel-page">
      {/* Channel header with banner, avatar, and subscription button */}
      <ChannelHeader channel={channel} />

      {/* Channel navigation tabs (Videos, Playlists, Community, etc.) */}
      <ChannelTabs />

      {/* Grid of videos from this channel */}
      <VideoGrid videos={videos} />
    </div>
  )
}
