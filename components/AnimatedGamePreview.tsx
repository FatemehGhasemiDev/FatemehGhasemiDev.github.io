'use client';

import { motion } from 'framer-motion';

const balls = [
  { className: 'left-[18%] top-[57%] h-12 w-12 bg-accent', delay: 0 },
  { className: 'left-[31%] top-[45%] h-10 w-10 bg-accent-2', delay: 0.4 },
  { className: 'left-[58%] top-[60%] h-9 w-9 bg-accent-3', delay: 0.7 },
  { className: 'right-[18%] top-[32%] h-14 w-14 bg-accent-4', delay: 0.2 },
];

export default function AnimatedGamePreview() {
  return (
    <div className="relative aspect-[1.12/0.82] overflow-hidden rounded-2xl border border-white/[0.12] bg-[#121519] shadow-2xl shadow-black/40">
      <div className="flex h-11 items-center justify-between border-b border-white/[0.1] bg-white/[0.025] px-5">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" />
          LIVE PREVIEW
        </div>
        <div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /></div>
      </div>
      <div className="relative h-[calc(100%-44px)] overflow-hidden bg-[radial-gradient(circle_at_50%_40%,rgba(75,83,95,0.24),transparent_48%),#11151a]">
        <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_26px] [transform:perspective(220px)_rotateX(55deg)_scale(1.4)] [transform-origin:bottom]" />
        <motion.div animate={{ rotate: [-4, 3, -4], y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[18%] top-[66%] h-3 w-36 rounded-full bg-slate-400/70 shadow-lg shadow-black/40" />
        <motion.div animate={{ rotate: [5, -3, 5], y: [0, 5, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[12%] top-[48%] h-3 w-32 rounded-full bg-slate-400/70 shadow-lg shadow-black/40" />
        {balls.map((ball) => (
          <motion.span key={ball.className} animate={{ y: [0, -22, 0], x: [0, 8, 0], scale: [1, 1.05, 1] }} transition={{ duration: 2.8 + ball.delay, delay: ball.delay, repeat: Infinity, ease: 'easeInOut' }} className={`absolute rounded-full shadow-[inset_-6px_-8px_10px_rgba(0,0,0,.2),0_12px_20px_rgba(0,0,0,.35)] ${ball.className}`} />
        ))}
        <div className="absolute bottom-4 left-5 font-mono text-[10px] text-white/40">PHYSICS / REAL-TIME SYSTEMS</div>
      </div>
    </div>
  );
}
