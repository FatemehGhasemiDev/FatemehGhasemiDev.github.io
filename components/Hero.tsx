'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { profile } from '@/lib/projectsData';
import AnimatedGamePreview from './AnimatedGamePreview';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="about" ref={ref} className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/3 h-[560px] w-[560px] rounded-full bg-accent/[0.06] blur-[140px]" />
        <div className="absolute right-[12%] top-[22%] h-[260px] w-[260px] rounded-full bg-accent-2/[0.08] blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 perspective-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-16 pt-32 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8 md:pt-28 lg:gap-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{profile.aboutTag}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-text sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            I&apos;m Fatemeh<br />Ghasemi
            <span className="mt-3 block text-accent">Game Programmer<br />&amp; Developer</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-9 max-w-xl space-y-4">
            {profile.bio.split('\n').map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed text-muted md:text-base">{paragraph}</p>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-lg bg-accent px-5 py-3 font-semibold text-sm text-bg transition-transform hover:-translate-y-0.5">
              View Projects <ArrowDown size={15} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-lg border border-line px-5 py-3 font-semibold text-sm text-text transition-colors hover:border-accent hover:text-accent">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-14 grid max-w-lg grid-cols-3 gap-6">
            <Stat value="4+" label="Years of Unity" detail="experience" />
            <Stat value="6+" label="Years of" detail="programming" />
            <Stat value="3+" label="Commercial game" detail="projects" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="relative mx-auto w-full max-w-[540px] md:mt-10">
          <AnimatedGamePreview />
          <div className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" />
        </motion.div>

        <a href="#projects" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-dark transition-colors hover:text-accent sm:flex">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ArrowDown size={16} /></motion.div>
        </a>
      </motion.div>
    </section>
  );
}

function Stat({ value, label, detail }: { value: string; label: string; detail: string }) {
  return <div><div className="text-2xl font-bold text-text">{value}</div><div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-dark">{label}<br />{detail}</div></div>;
}
