// app/shorts/page.jsx
// This page displays YouTube Shorts content
// It demonstrates a different page layout for a specific content type

import ShortsList from "@/components/ShortsList"

export default function ShortsPage() {
  // Sample shorts data that would normally come from an API
  const shorts = [
    {
      id: "s1",
      title: "When Dr. Doom Realised How Powerful Silver Surfer Is",
      creator: "Marvel Clips",
      likes: "45K",
      thumbnail: "/thumbnails/short1.jpg",
    },
    {
      id: "s2",
      title: "Name This Unique Vehicle",
      creator: "Car Enthusiast",
      likes: "12K",
      thumbnail: "/thumbnails/short2.jpg",
    },
    {
      id: "s3",
      title: "Chocolate dessert recipe in 30 seconds",
      creator: "Quick Recipes",
      likes: "89K",
      thumbnail: "/thumbnails/short3.jpg",
    },
    // More shorts would be added here
  ]

  return (
    <div className="shorts-page">
      <h1 className="text-2xl font-bold mb-4">Shorts</h1>

      {/* Shorts content displayed in a vertical scrolling feed */}
      <ShortsList shorts={shorts} />
    </div>
  )
}
