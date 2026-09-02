# Project Videos

Place your gameplay video files in this folder. The filenames referenced in
`lib/projectsData.ts` are:

- `bingo-daborna.mp4`
- `physics-sandbox.mp4`
- `ai-companion.mp4`
- `shader-lab.mp4`

## How to add your own videos

1. Record a short gameplay clip (10-30 seconds works best for a loop).
2. Export it as an `.mp4` file (H.264 codec, 1080p or 720p).
3. Name it to match the `video` path in `lib/projectsData.ts` and drop it
   in this folder.

The videos play automatically on hover in the project card, and on loop
inside the project detail modal. They are muted and inline so they work
on all browsers and mobile devices.

## To add a video to a new project

In `lib/projectsData.ts`, add these two optional fields to any project:

    video: '/videos/your-file.mp4',
    videoPoster: '/videos/your-poster.jpg',  // optional thumbnail image

If no video is provided, the card simply shows without the video area.
If a video path is set but the file is missing, a "Video coming soon"
placeholder appears automatically.
