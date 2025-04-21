### YouTube Clone

A YouTube clone built with Next.js for WEB101 & WEB102 practical assignments.

## Project Overview

This project is a YouTube clone that implements core functionalities of the YouTube platform, including:

- Video browsing and playback
- Channel pages
- Comments and interactions
- User authentication
- Responsive design for all screen sizes


## Team Members

1. Karma Choing Zangmo
2. Thinley Dorji
3. Sonam Zangmo

## File-Based Routing Structure

The application uses Next.js App Router with file-based routing:

- `app/page.jsx` - Home page with video grid and category filters
- `app/video/[id]/page.jsx` - Dynamic route for individual video pages
- `app/channel/[id]/page.jsx` - Dynamic route for channel pages
- `app/shorts/page.jsx` - YouTube Shorts page
- `app/subscriptions/page.jsx` - Protected route for subscribed content
- `app/login/page.jsx` - User authentication page
- `app/not-found.jsx` - Custom 404 page


## Reusable Components

The application is built with reusable components following the single responsibility principle:

### Layout Components

- `Header.jsx` - Main navigation header with search functionality
- `Sidebar.jsx` - Side navigation with links to different sections


### Video Components

- `VideoCard.jsx` - Displays video thumbnail and metadata in grid
- `VideoGrid.jsx` - Arranges multiple VideoCard components in a responsive grid
- `VideoPlayer.jsx` - Video playback with controls
- `VideoInfo.jsx` - Displays video title, channel, and interaction buttons
- `RelatedVideos.jsx` - Shows related videos in the sidebar


### Channel Components

- `ChannelHeader.jsx` - Displays channel banner, avatar, and subscription button
- `ChannelTabs.jsx` - Navigation tabs for different channel sections


### Interaction Components

- `CommentSection.jsx` - Displays and manages video comments
- `CategoryBar.jsx` - Horizontal scrollable filter for video categories
- `ShortsList.jsx` - Grid display for YouTube Shorts content


## Route Protection

The application implements route protection for pages that require authentication:

- `app/subscriptions/page.jsx` checks if a user is logged in
- If not authenticated, users are redirected to the login page
- This demonstrates how to protect routes that require authentication


## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn


### Installation

1. Clone the repository:

```shellscript
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```


2. Install dependencies:

```shellscript
npm install
```


3. Create a jsconfig.json file in the project root:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "jsx": "react-jsx"
  }
}
```


4. Run the development server:

```shellscript
npm run dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## GitFlow Branching Strategy

We follow the GitFlow branching model for this project:

### Main Branches

- `main` - Production-ready code
- `develop` - Latest development changes


### Supporting Branches

- `feature/*` - New features (branched from and merged back to `develop`)
- `release/*` - Preparation for a new production release
- `hotfix/*` - Urgent fixes for production issues


### Workflow

1. **Feature Development**:

```shellscript
# Create a new feature branch from develop
git checkout develop
git pull
git checkout -b feature/video-player

# Make changes, commit, and push
git add .
git commit -m "Add video player component"
git push -u origin feature/video-player

# When feature is complete, merge to develop
git checkout develop
git pull
git merge feature/video-player
git push
```


2. **Release Preparation**:

```shellscript
# Create a release branch from develop
git checkout develop
git pull
git checkout -b release/v1.0.0

# Make final adjustments and fixes
git add .
git commit -m "Prepare v1.0.0 release"

# Merge to main and develop
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0"
git push --follow-tags

git checkout develop
git merge release/v1.0.0
git push
```


3. **Hotfixes**:

```shellscript
# Create hotfix branch from main
git checkout main
git pull
git checkout -b hotfix/login-fix

# Make the fix
git add .
git commit -m "Fix login issue"

# Merge to main and develop
git checkout main
git merge hotfix/login-fix
git tag -a v1.0.1 -m "Version 1.0.1"
git push --follow-tags

git checkout develop
git merge hotfix/login-fix
git push
```




## Team Collaboration

### Task Division

- **Team Member 1**: Home page, video grid, and category components
- **Team Member 2**: Video player, video info, and comments components
- **Team Member 3**: Channel pages, authentication, and sidebar navigation


### Code Review Process

1. Create a pull request from your feature branch to develop
2. Assign at least one team member to review the code
3. Address any feedback or comments
4. Merge only after approval from reviewer(s)


## Project Structure

```plaintext
youtube-clone/
├── app/
│   ├── channel/
│   │   └── [id]/
│   │       └── page.jsx
│   ├── login/
│   │   └── page.jsx
│   ├── shorts/
│   │   └── page.jsx
│   ├── subscriptions/
│   │   └── page.jsx
│   ├── video/
│   │   └── [id]/
│   │       └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   └── page.jsx
├── components/
│   ├── CategoryBar.jsx
│   ├── ChannelHeader.jsx
│   ├── ChannelTabs.jsx
│   ├── CommentSection.jsx
│   ├── Header.jsx
│   ├── RelatedVideos.jsx
│   ├── ShortsList.jsx
│   ├── Sidebar.jsx
│   ├── VideoCard.jsx
│   ├── VideoGrid.jsx
│   ├── VideoInfo.jsx
│   └── VideoPlayer.jsx
├── public/
│   ├── avatars/
│   ├── banners/
│   └── thumbnails/
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
```

## Commenting Guidelines

When commenting code, follow these guidelines:

1. **File Headers**: Include a header comment at the top of each file explaining its purpose
2. **Function Comments**: Explain what each function does
3. **Component Props**: Document the expected props for each component
4. **Complex Logic**: Explain any complex logic or algorithms


Example:

```javascriptreact
// components/VideoCard.jsx
// This component renders a single video card with thumbnail, title, and metadata
// It's a reusable component used in the VideoGrid

import Link from "next/link"

// Props:
// - video: Object containing id, title, channel, views, timestamp, thumbnail
export default function VideoCard({ video }) {
  // Destructure the video object for easier access
  const { id, title, channel, views, timestamp, thumbnail } = video

  return (
    // Component JSX
  )
}
```

## Future Enhancements

- Implement search functionality
- Add video upload capabilities
- Implement real authentication with JWT
- Create user profile pages
- Add video recommendations based on watch history


## Learning Outcomes Achieved

- **LO1**: Implemented package managers (npm), runtime environments (Node.js), and frameworks (Next.js)
- **LO3**: Developed a multiple-page application using Next.js App Router for routing
- **LO7**: Designed and implemented reusable components adhering to single responsibility principle