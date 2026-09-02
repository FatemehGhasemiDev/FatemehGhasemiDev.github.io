export type ProjectType = 'COMMERCIAL' | 'PERSONAL';
export type Platform = 'Mobile' | 'PC' | '2D / 3D' | 'Mobile · PC';

export interface ProjectMeta {
  role: string;
  engine: string;
  platform: Platform;
  focus: string;
}

export interface ProjectSection {
  title: string;
  points: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  type: ProjectType;
  platform: string;
  year: string;
  intro: string;
  meta: ProjectMeta;
  sections: ProjectSection[];
  tags: string[];
  video?: string;
  videoPoster?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'bingo-daborna',
    number: '04',
    title: 'Bingo / Daborna',
    type: 'COMMERCIAL',
    platform: 'MOBILE',
    year: '2023 — 2024',
    featured: true,
    video: '/videos/bingo-daborna.mp4',
    intro:
      'A fast-paced commercial mobile Bingo game inspired by titles like Bingo Blitz. Responsible for core gameplay architecture, event-driven UI systems, meta-progression, and ongoing optimization at Caspian Game Studio over 1.5 years.',
    meta: {
      role: 'Gameplay Developer',
      engine: 'Unity · C#',
      platform: 'Mobile',
      focus: 'Systems Architecture & Core Logic',
    },
    sections: [
      {
        title: 'Core Gameplay Architecture',
        points: [
          'Designed a modular gameplay architecture with decoupled systems for card generation, number drawing, win detection, and scoring — enabling rapid iteration on game modes.',
          'Implemented an event-driven command pattern that centralizes game state transitions, making the flow between rounds, bonuses, and rewards clean and debuggable.',
          'Built a reusable card-board framework supporting multiple Bingo variants (75-ball, 90-ball) with shared daubing logic, win-line detection, and visual feedback.',
        ],
      },
      {
        title: 'Event-Driven UI & Meta-Systems',
        points: [
          'Architected a strongly-typed event bus connecting UI panels to gameplay state, eliminating direct references and enabling designers to wire new screens without engineering changes.',
          'Developed meta-progression systems including player level progression, unlockable card themes, daily login rewards, and a tournament mode with real-time leaderboard integration.',
          'Integrated live-ops content pipelines allowing new Bingo rooms, themes, and events to be configured via remote config without app store updates.',
        ],
      },
      {
        title: 'Analytics & Performance',
        points: [
          'Integrated and instrumented analytics events across the full player lifecycle — from first-tutorial through retention and monetization funnels — enabling data-driven design decisions.',
          'Optimized draw-call counts and UI batching for low-end Android devices, reducing frame-time spikes during the most animation-heavy round transitions.',
          'Profiled and resolved memory leaks in card asset pooling and leaderboard refresh cycles, improving long-session stability on 2 GB RAM devices.',
        ],
      },
    ],
    tags: ['Unity', 'C#', 'Mobile', 'Event-Driven', 'Meta-Progression', 'Analytics', 'Live-Ops'],
  },
  {
    id: 'physics-sandbox',
    number: '03',
    title: 'Physics Sandbox',
    type: 'PERSONAL',
    platform: 'PC',
    year: '2024',
    video: '/videos/physics-sandbox.mp4',
    intro:
      'A personal Unity project exploring custom physics interactions, constraint solving, and real-time material simulation. Built to deepen my understanding of game physics math and performance-conscious system design.',
    meta: {
      role: 'Sole Developer',
      engine: 'Unity · C#',
      platform: 'PC',
      focus: 'Physics & Math',
    },
    sections: [
      {
        title: 'Custom Physics Systems',
        points: [
          'Implemented a custom Verlet integration solver for soft-body chains and cloth-like constraints, running alongside Unity\'s built-in physics without conflict.',
          'Built a spatial hash grid for broad-phase collision detection, improving pair-query performance by ~8x over brute-force for scenes with 500+ interacting bodies.',
        ],
      },
      {
        title: 'Tooling & Debugging',
        points: [
          'Created an in-editor debug overlay with live force vectors, contact points, and per-body energy readouts — invaluable for tuning constraint stiffness in real time.',
          'Wrote a replay buffer system that captures physics state snapshots, allowing step-by-step playback of complex interaction sequences for debugging.',
        ],
      },
    ],
    tags: ['Unity', 'C#', 'Physics', 'Verlet', 'Spatial Hash', 'Debugging'],
  },
  {
    id: 'ai-companion',
    number: '02',
    title: 'AI Companion Framework',
    type: 'PERSONAL',
    platform: 'PC',
    year: '2023',
    video: '/videos/ai-companion.mp4',
    intro:
      'A modular NPC companion framework exploring utility AI for decision-making, behavior trees for execution, and a shared blackboard for squad-level coordination. Designed to be dropped into any gameplay project.',
    meta: {
      role: 'Sole Developer',
      engine: 'Unity · C#',
      platform: 'PC',
      focus: 'AI & System Design',
    },
    sections: [
      {
        title: 'Decision Architecture',
        points: [
          'Implemented a utility-AI scorer that evaluates contextual considerations (health, proximity, objective priority) to produce natural, emergent companion behavior.',
          'Built a behavior tree execution layer with interrupt nodes and reusable decorators, keeping complex decision logic readable and easy to extend.',
        ],
      },
      {
        title: 'Squad Coordination',
        points: [
          'Designed a shared blackboard system enabling multiple NPCs to exchange perceived threats and coordinate repositioning without a central controller.',
          'Implemented formation-following logic with dynamic role assignment, so companions can fill gaps when a squad member is downed or repositioned.',
        ],
      },
    ],
    tags: ['Unity', 'C#', 'Utility AI', 'Behavior Trees', 'Blackboard', 'Game AI'],
  },
  {
    id: 'shader-lab',
    number: '01',
    title: 'Shader Lab Experiments',
    type: 'PERSONAL',
    platform: 'PC',
    year: '2023',
    video: '/videos/shader-lab.mp4',
    intro:
      'A growing collection of HLSL shader experiments in Unity Shader Graph and hand-written code — covering stylized water, dissolve effects, and custom lighting models for non-photorealistic rendering.',
    meta: {
      role: 'Sole Developer',
      engine: 'Unity · HLSL',
      platform: 'PC',
      focus: 'Graphics & Shaders',
    },
    sections: [
      {
        title: 'Stylized Rendering',
        points: [
          'Authored a toon-style lighting model with configurable ramp textures and rim-light control for a clean, anime-inspired aesthetic.',
          'Built a depth-based water shader with Gerstner wave displacement and custom foam masking driven by the scene depth buffer.',
        ],
      },
      {
        title: 'VFX & Post-Processing',
        points: [
          'Created a modular dissolve shader with noise-driven edge glow, reused across death effects and ability casts.',
          'Wrote a custom color-grading post-process pass implementing ACES tone mapping with a tunable contrast curve.',
        ],
      },
    ],
    tags: ['Unity', 'HLSL', 'Shader Graph', 'Stylized', 'VFX', 'Post-Processing'],
  },
];

export const profile = {
  name: 'Fatemeh Ghasemi',
  role: 'Unity Gameplay Programmer',
  location: 'Tehran, Iran',
  email: 'fatemeh.ghasemi.dev@gmail.com',
  github: 'github.com/fatemeh-ghasemi',
  linkedin: 'linkedin.com/in/fatemeh-ghasemi',
  aboutTag: 'ABOUT ME',
  tagline: "I'm Fatemeh Ghasemi",
  taglineAccent: 'Game Programmer & Developer',
  bio: "I'm a Unity Gameplay Programmer with 4+ years of Unity development experience across commercial and personal projects. My main focus is building gameplay systems that are responsive, maintainable, and performant.\nI enjoy the technical side of games: physics, system design, game math, debugging, and finding practical solutions to difficult gameplay problems. Beyond C#, I also explore Python and machine learning applications within Visual Studio Code to broaden my technical perspective. I'm comfortable working independently or collaborating closely with artists and designers.",
};

export const techProfile = [
  {
    label: 'Education',
    value: 'B.Sc. Computer Engineering (Term 5)',
    detail: 'Azad University',
  },
  {
    label: 'Languages',
    value: 'English (C2) · German (A2) · Persian (Native)',
    detail: null,
  },
  {
    label: 'Unity',
    value: '2D / 3D · Mobile · PC',
    detail: null,
  },
  {
    label: 'C#',
    value: 'OOP · SOLID · Patterns · Events',
    detail: null,
  },
];

export const skills = [
  { category: 'Languages', items: ['C#', 'Python', 'HLSL', 'SQL'] },
  { category: 'Unity', items: ['ScriptableObjects', 'ECS/DOTS', 'Addressables', 'Shader Graph', 'Physics 2D/3D', 'UI Toolkit'] },
  { category: 'Architecture', items: ['SOLID', 'Design Patterns', 'Event-Driven', 'State Machines', 'Behavior Trees', 'Service Locator'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Profiler', 'Jira', 'Remote Config', 'CI/CD'] },
  { category: 'ML / Data', items: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch'] },
  { category: 'Platforms', items: ['Android', 'iOS', 'PC / Steam'] },
];

export const experience = [
  {
    role: 'Gameplay Developer',
    company: 'Caspian Game Studio',
    period: '2023 — 2024 · 1.5 years',
    description:
      'Core gameplay developer on a commercial mobile Bingo title. Owned systems architecture, event-driven UI, meta-progression, and performance optimization across the full development and live-ops cycle.',
    highlights: [
      'Owned core gameplay architecture for a shipped commercial mobile title',
      'Built event-driven UI systems enabling designer-driven content wiring',
      'Optimized performance for low-end Android devices with draw-call and memory improvements',
      'Integrated analytics across the full player lifecycle for data-driven decisions',
    ],
  },
];
