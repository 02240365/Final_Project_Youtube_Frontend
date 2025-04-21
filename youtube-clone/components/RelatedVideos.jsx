// components/RelatedVideos.jsx
// This component renders a list of related videos
// It's a reusable component used on the video page

import Link from "next/link"

export default function RelatedVideos({ videos }) {
  return (
    <div className="related-videos">
      <h2 className="text-lg font-medium mb-4">Related Videos</h2>

      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="flex">
            {/* Video thumbnail */}
            <Link href={`/video/${video.id}`} className="flex-shrink-0 mr-2">
              <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-gray-200">
                {/* In a real app, this would be an actual image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                  Thumbnail
                </div>
              </div>
            </Link>

            <div className="flex-1 min-w-0">
              {/* Video title */}
              <Link href={`/video/${video.id}`} className="block">
                <h3 className="text-sm font-medium line-clamp-2 mb-1">{video.title}</h3>
              </Link>

              {/* Channel name */}
              <Link href={`/channel/${video.channelId}`} className="block text-xs text-gray-600 mb-1">
                {video.channel}
              </Link>

              {/* Video metadata */}
              <div className="text-xs text-gray-600">
                {video.views} • {video.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
