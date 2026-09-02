import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg: 'rgb(var(--bg))',
        'bg-soft': 'rgb(var(--bg-soft))',
        'bg-softer': 'rgb(var(--bg-softer))',
        text: 'rgb(var(--text))',
        muted: 'rgb(var(--muted))',
        'muted-dark': 'rgb(var(--muted-dark))',
        accent: 'rgb(var(--accent))',
        'accent-2': 'rgb(var(--accent-2))',
        'accent-3': 'rgb(var(--accent-3))',
        'accent-4': 'rgb(var(--accent-4))',
        line: 'rgb(var(--line))',
        'line-soft': 'rgb(var(--line-soft))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
