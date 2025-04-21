// components/CategoryBar.jsx
// This component renders a horizontal scrollable bar of category filters
// It's a reusable component used on the home page

"use client"

import { useState, useRef } from "react"

export default function CategoryBar({ categories }) {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("All")

  // Refs for scroll functionality
  const scrollContainerRef = useRef(null)

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    // In a real application, this would filter the videos
  }

  // Handle scroll buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -200 : 200
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="category-bar relative mb-4">
      {/* Left scroll button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 p-1 rounded-full shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Scrollable category container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto py-2 px-8 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`whitespace-nowrap px-3 py-1 rounded-full mr-2 text-sm ${
              activeCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 p-1 rounded-full shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
