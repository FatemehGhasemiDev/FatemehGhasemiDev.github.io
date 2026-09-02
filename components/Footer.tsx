'use client';

import { profile } from '@/lib/projectsData';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 md:flex-row md:px-8">
        <span className="font-mono text-xs text-muted-dark">
          <span className="text-text">FG</span>
          <span className="text-accent">.</span> / {profile.role}
        </span>
        <span className="font-mono text-xs text-muted-dark">
          © {new Date().getFullYear()} — Built with care
        </span>
      </div>
    </footer>
  );
}
