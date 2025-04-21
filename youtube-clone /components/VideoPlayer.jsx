// components/VideoPlayer.jsx
// This component renders a video player with controls
// It's a reusable component used on the video page

"use client"

import { useState, useRef } from "react"

export default function VideoPlayer({ videoUrl, thumbnail }) {
  // State for player controls
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Reference to the video element
  const videoRef = useRef(null)

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // Handle video loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Handle seeking
  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.target.value / 100) * duration
      videoRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
  }

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setVolume(newVolume)
  }

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
    setIsFullscreen(!isFullscreen)
  }

  // Format time (seconds to MM:SS)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="video-player relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
      {/* For a real application, this would be a real video player */}
      {/* For now, we'll use a placeholder */}
      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-xl mb-2">Video Player</p>
          <p className="text-sm text-gray-400">This would be a real video player in a production app</p>
        </div>
      </div>

      {/* Video controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        {/* Progress bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / (duration || 1)) * 100}
          onChange={handleSeek}
          className="w-full h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
        />

        <div className="flex items-center justify-between mt-2">
          {/* Left controls: play/pause and time */}
          <div className="flex items-center">
            <button onClick={togglePlay} className="text-white mr-2">
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>

            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration || 0)}
            </span>
          </div>

          {/* Right controls: volume and fullscreen */}
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <button className="text-white mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </button>

              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
              />
            </div>

            <button onClick={toggleFullscreen} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
