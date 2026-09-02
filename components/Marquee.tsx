'use client';

const items = [
  'SYSTEMS ARCHITECTURE',
  'EVENT-DRIVEN DESIGN',
  'GAME MATH',
  'PHYSICS',
  'META-PROGRESSION',
  'PERFORMANCE OPTIMIZATION',
  'C# · UNITY',
  'DEBUGGING',
  'LIVE-OPS',
];

export default function Marquee() {
  return (
    <div className="group relative flex items-center overflow-hidden border-y border-line bg-bg-soft py-4">
      <div className="flex animate-marquee shrink-0 items-center group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-mono text-sm tracking-wider text-muted"
          >
            {item}
            <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
