// components/VideoCard.jsx
// This component renders a single video card with thumbnail, title, and metadata
// It's a reusable component used in the VideoGrid

import Link from "next/link"

export default function VideoCard({ video }) {
  // Destructure the video object for easier access
  const { id, title, channel, views, timestamp, thumbnail } = video

  return (
    <div className="video-card">
      <Link href={`/video/${id}`} className="block">
        {/* Video thumbnail */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-gray-200">
          {/* In a real app, this would be an actual image */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">Thumbnail</div>
        </div>
      </Link>

      <div className="flex">
        {/* Channel avatar */}
        <Link href={`/channel/${id}`} className="flex-shrink-0 mr-2">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
            {/* In a real app, this would be an actual image */}
            <div className="w-full h-full bg-gray-300"></div>
          </div>
        </Link>

        <div className="flex-1 min-w-0">
          {/* Video title */}
          <Link href={`/video/${id}`} className="block">
            <h3 className="text-sm font-medium line-clamp-2 mb-1">{title}</h3>
          </Link>

          {/* Channel name */}
          <Link href={`/channel/${id}`} className="block text-xs text-gray-600 mb-1">
            {channel}
          </Link>

          {/* Video metadata */}
          <div className="text-xs text-gray-600">
            {views} • {timestamp}
          </div>
        </div>
      </div>
    </div>
  )
}
