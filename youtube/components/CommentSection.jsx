// components/CommentSection.jsx
// This component renders the comment section with a form to add new comments
// It's a reusable component used on the video page

"use client"

import { useState } from "react"

export default function CommentSection({ comments: initialComments }) {
  // State for comments and new comment form
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [sortBy, setSortBy] = useState("top") // 'top' or 'newest'

  // Handle comment submission
  const handleSubmitComment = (e) => {
    e.preventDefault()

    // Don't submit empty comments
    if (!newComment.trim()) return

    // Create a new comment object
    const comment = {
      id: `c${comments.length + 1}`,
      user: "You",
      text: newComment,
      timestamp: "Just now",
      likes: 0,
    }

    // Add the new comment to the list
    setComments([comment, ...comments])

    // Clear the form
    setNewComment("")
  }

  // Handle comment like
  const handleLikeComment = (id) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment)))
  }

  // Sort comments based on the selected option
  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === "top") {
      return b.likes - a.likes
    } else {
      // This is a simplified sort by time - in a real app, we'd parse the timestamps
      return b.id.localeCompare(a.id)
    }
  })

  return (
    <div className="comment-section">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">{comments.length} Comments</h2>

        <div className="flex items-center">
          <button
            onClick={() => setSortBy("top")}
            className={`mr-4 text-sm ${sortBy === "top" ? "font-medium" : "text-gray-600"}`}
          >
            Top comments
          </button>

          <button
            onClick={() => setSortBy("newest")}
            className={`text-sm ${sortBy === "newest" ? "font-medium" : "text-gray-600"}`}
          >
            Newest first
          </button>
        </div>
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmitComment} className="flex mb-6">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-3 flex-shrink-0">
          {/* User avatar placeholder */}
          <div className="w-full h-full bg-gray-300"></div>
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-0 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
          />

          <div className="flex justify-end mt-2">
            <button type="button" onClick={() => setNewComment("")} className="px-3 py-1 text-sm mr-2">
              Cancel
            </button>

            <button
              type="submit"
              disabled={!newComment.trim()}
              className={`px-3 py-1 text-sm rounded-full ${
                newComment.trim() ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Comment
            </button>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <div className="space-y-4">
        {sortedComments.map((comment) => (
          <div key={comment.id} className="flex">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-3 flex-shrink-0">
              {/* User avatar placeholder */}
              <div className="w-full h-full bg-gray-300"></div>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="font-medium mr-2">{comment.user}</span>
                <span className="text-xs text-gray-600">{comment.timestamp}</span>
              </div>

              <p className="text-sm mb-2">{comment.text}</p>

              <div className="flex items-center text-sm">
                <button onClick={() => handleLikeComment(comment.id)} className="flex items-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
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
                  {comment.likes}
                </button>

                <button className="flex items-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
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
                </button>

                <button className="text-gray-600">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
