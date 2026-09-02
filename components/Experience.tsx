'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './anim';
import { experience, skills } from '@/lib/projectsData';
import { Briefcase, Check } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Experience & Skills
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-text md:text-4xl"
          >
            Where I&apos;ve worked, what I know.
          </motion.h2>
        </motion.div>

        {/* Experience cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-6"
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border border-line bg-bg-soft p-6 md:p-8"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg text-accent">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-sm text-accent">{exp.company}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-dark">
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>

              <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              className="bg-bg p-6 md:p-7"
            >
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
                {group.category}
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-bg-soft px-2.5 py-1 font-mono text-xs text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
