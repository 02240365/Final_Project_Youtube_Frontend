// components/VideoGrid.jsx
// This component renders a grid of video cards
// It's a reusable component used on multiple pages

import VideoCard from "./VideoCard"

export default function VideoGrid({ videos }) {
  return (
    <div className="video-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}
