'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface ProjectVideoProps {
  src: string;
  poster?: string;
  className?: string;
  rounded?: string;
}

export default function ProjectVideo({
  src,
  poster,
  className = '',
  rounded = 'rounded-xl',
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleMouseEnter = () => {
    const v = videoRef.current;
    if (v && !v.ended) v.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  if (error) {
    return (
      <div
        className={`flex items-center justify-center ${rounded} border border-line bg-bg-soft ${className}`}
      >
        <div className="flex flex-col items-center gap-2 text-muted-dark">
          <Play size={24} />
          <span className="font-mono text-xs">Video coming soon</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${rounded} border border-line bg-bg-soft ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-bg-softer" />
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        onError={() => setError(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
