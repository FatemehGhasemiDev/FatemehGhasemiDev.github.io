'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, X, Play } from 'lucide-react';
import { projects, type Project } from '@/lib/projectsData';
import { fadeInUp, staggerContainer } from './anim';
import ProjectVideo from './ProjectVideo';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-16">
          <motion.div variants={fadeInUp} className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Projects</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-text md:text-5xl">
            Selected work.
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => (
            <FeaturedProjectRow key={project.id} project={project} index={index} onSelect={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function FeaturedProjectRow({ project, index, onSelect }: { project: Project; index: number; onSelect: () => void }) {
  const isReversed = index % 2 === 1;
  const isFeatured = project.featured;

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative"
    >
      <div className={`grid items-center gap-6 md:gap-10 ${isFeatured ? 'md:grid-cols-2' : 'md:grid-cols-2'} ${isReversed ? 'md:[&>*:first-child]:order-2' : ''}`}>
        {/* Visual */}
        <button onClick={onSelect} className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-bg-soft" aria-label={`Open ${project.title}`}>
          {project.video ? (
            <ProjectVideo src={project.video} poster={project.videoPoster} className="h-full w-full" rounded="rounded-2xl" />
          ) : (
            <VisualPlaceholder project={project} />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-bg/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent/10 text-accent">
              <Play size={22} className="ml-0.5" />
            </span>
          </div>
        </button>

        {/* Text */}
        <div>
          <div className="mb-3 flex items-center gap-3 font-mono text-xs text-muted-dark">
            <span className="text-accent">{project.number}</span>
            <span className="h-3 w-px bg-line" />
            <span className="tracking-wider">{project.type} / {project.platform}</span>
            <span className="h-3 w-px bg-line" />
            <span>{project.year}</span>
          </div>

          <h3 className={`font-bold tracking-tight text-text transition-colors duration-200 group-hover:text-accent ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
            {project.title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{project.intro}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, isFeatured ? 6 : 4).map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] text-muted">{tag}</span>
            ))}
          </div>

          <button onClick={onSelect} className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-mono text-xs text-text transition-all duration-200 hover:border-accent hover:text-accent">
            View details <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:rotate-45" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function VisualPlaceholder({ project }: { project: Project }) {
  const colorMap: Record<string, string> = {
    COMMERCIAL: 'bg-accent',
    PERSONAL: 'bg-accent-2',
  };
  const accentColor = colorMap[project.type] ?? 'bg-accent';
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_40%,rgba(75,83,95,0.18),transparent_50%),#12151a]">
      <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_20px] [transform:perspective(200px)_rotateX(55deg)_scale(1.5)] [transform-origin:bottom]" />
      <motion.span animate={{ y: [0, -16, 0], scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className={`absolute left-[22%] top-[48%] h-10 w-10 rounded-full ${accentColor} shadow-[inset_-4px_-6px_8px_rgba(0,0,0,.2),0_10px_16px_rgba(0,0,0,.3)]`} />
      <motion.span animate={{ y: [0, 12, 0], x: [0, -6, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute right-[28%] top-[30%] h-7 w-7 rounded-full bg-accent-3/80 shadow-[inset_-3px_-4px_6px_rgba(0,0,0,.2),0_8px_12px_rgba(0,0,0,.3)]" />
      <motion.span animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[22%] left-[15%] h-2.5 w-24 rounded-full bg-white/15" />
      <div className="absolute bottom-4 left-5 font-mono text-[10px] text-white/30">
        {project.type === 'COMMERCIAL' ? 'GAMEPLAY FOOTAGE' : 'TECHNICAL DEMO'}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[70] bg-bg/80 backdrop-blur-md" />
          <div className="fixed inset-0 z-[71] flex items-start justify-center overflow-y-auto p-4 md:p-8">
            <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()} className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-bg-soft">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bg-soft/95 px-6 py-4 backdrop-blur-sm md:px-8">
                <div className="flex items-center gap-3 font-mono text-xs text-muted-dark">
                  <span className="text-accent">{project.number}</span>
                  <span className="h-3 w-px bg-line" />
                  <span className="tracking-wider">{project.type} / {project.platform}</span>
                </div>
                <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent" aria-label="Close"><X size={16} /></button>
              </div>

              <div className="max-h-[75vh] overflow-y-auto scrollbar-thin px-6 py-6 md:px-8 md:py-8">
                {project.video && (
                  <ProjectVideo src={project.video} poster={project.videoPoster} className="mb-6 aspect-video w-full" rounded="rounded-xl" />
                )}
                <h3 className="text-3xl font-bold tracking-tight text-text md:text-4xl">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-dark">{project.year}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{project.intro}</p>

                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
                  <MetaCell label="Role" value={project.meta.role} />
                  <MetaCell label="Engine" value={project.meta.engine} />
                  <MetaCell label="Platform" value={project.meta.platform} />
                  <MetaCell label="Focus" value={project.meta.focus} />
                </div>

                <div className="mt-8 space-y-8">
                  {project.sections.map((section, i) => (
                    <div key={i}>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-mono text-xs text-accent">0{i + 1}</span>
                        <h4 className="text-lg font-semibold text-text">{section.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {section.points.map((point, j) => (
                          <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-soft p-4 md:p-5">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-dark">{label}</div>
      <div className="mt-1.5 font-mono text-sm text-text">{value}</div>
    </div>
  );
}
