// components/ShortsList.jsx
// This component renders a vertical scrolling feed of shorts
// It's a reusable component used on the shorts page

export default function ShortsList({ shorts }) {
  return (
    <div className="shorts-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {shorts.map((short) => (
        <div key={short.id} className="short-item">
          {/* Short thumbnail with aspect ratio for vertical video */}
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-200 mb-2">
            {/* In a real app, this would be an actual image or video */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">Short</div>

            {/* Short title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-sm font-medium line-clamp-2">{short.title}</h3>
            </div>
          </div>

          {/* Short metadata */}
          <div className="text-xs text-gray-600">{short.likes} likes</div>
        </div>
      ))}
    </div>
  )
}
