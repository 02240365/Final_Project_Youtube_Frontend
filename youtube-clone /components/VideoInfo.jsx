// components/VideoInfo.jsx
// This component renders video information (title, channel, likes, etc.)
// It's a reusable component used on the video page

"use client"

import { useState } from "react"
import Link from "next/link"

export default function VideoInfo({ video }) {
  // Destructure the video object for easier access
  const { title, channel, channelId, views, likes, timestamp, description } = video

  // State for UI interactions
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  // Toggle subscription
  const toggleSubscription = () => {
    setIsSubscribed(!isSubscribed)
  }

  // Toggle like
  const toggleLike = () => {
    setIsLiked(!isLiked)
    if (isDisliked) setIsDisliked(false)
  }

  // Toggle dislike
  const toggleDislike = () => {
    setIsDisliked(!isDisliked)
    if (isLiked) setIsLiked(false)
  }

  // Toggle description expansion
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <div className="video-info mb-6">
      {/* Video title */}
      <h1 className="text-xl font-bold mb-2">{title}</h1>

      {/* Video metadata */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          {views} • {timestamp}
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleLike} className={`flex items-center ${isLiked ? "text-blue-600" : "text-gray-600"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill={isLiked ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            {likes}
          </button>

          <button
            onClick={toggleDislike}
            className={`flex items-center ${isDisliked ? "text-blue-600" : "text-gray-600"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill={isDisliked ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2"
              />
            </svg>
            Dislike
          </button>

          <button className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share
          </button>

          <button className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            Save
          </button>
        </div>
      </div>

      {/* Channel info and subscribe button */}
      <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 mb-4">
        <div className="flex items-center">
          <Link href={`/channel/${channelId}`} className="mr-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              {/* In a real app, this would be an actual image */}
              <div className="w-full h-full bg-gray-300"></div>
            </div>
          </Link>

          <div>
            <Link href={`/channel/${channelId}`} className="font-medium block">
              {channel}
            </Link>
            <span className="text-sm text-gray-600">1.2M subscribers</span>
          </div>
        </div>

        <button
          onClick={toggleSubscription}
          className={`px-4 py-2 rounded-full ${isSubscribed ? "bg-gray-200 text-gray-800" : "bg-red-600 text-white"}`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      {/* Video description */}
      <div className="bg-gray-50 p-3 rounded-lg">
        <div className={`${showFullDescription ? "" : "line-clamp-2"}`}>{description}</div>

        {description && description.length > 100 && (
          <button onClick={toggleDescription} className="text-sm font-medium text-gray-600 mt-2">
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  )
}
