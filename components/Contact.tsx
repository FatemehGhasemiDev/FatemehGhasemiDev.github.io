'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './anim';
import { profile } from '@/lib/projectsData';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const socials = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: profile.github, href: `https://${profile.github}`, icon: Github },
  { label: 'LinkedIn', value: profile.linkedin, href: `https://${profile.linkedin}`, icon: Linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-24 md:py-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Contact
            </span>
            <span className="h-px w-8 bg-accent" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Let&apos;s build something{' '}
            <span className="text-accent">playable.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg"
          >
            Open to gameplay programming opportunities, freelance projects, and
            technical collaboration. Feel free to reach out.
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex w-full items-center gap-3 rounded-xl border border-line bg-bg-soft px-5 py-4 text-left transition-all duration-200 hover:border-accent/30 sm:w-auto"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg text-muted transition-colors duration-200 group-hover:text-accent">
                  <s.icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-dark">
                    {s.label}
                  </div>
                  <div className="font-mono text-sm text-text">
                    {s.value}
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-dark transition-all duration-200 group-hover:text-accent group-hover:rotate-45"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
