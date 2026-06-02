import type { Config } from 'tailwindcss'

export default {
  theme: {
    screens: {
      sm: '735px',
      md: '810px',
      xl: '1310px',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        paper: 'var(--paper)',
        ink: '#0a223a',
        accent: 'var(--accent)',
        'reference-dark': 'var(--reference-dark)',
        'reference-light': 'var(--reference-light)',
        line: 'var(--line)',
        'ink-85': 'rgba(0, 0, 0, 0.85)',
        'paper-soft': 'rgba(228, 237, 220, 0.96)',
      },
      fontFamily: {
        display: ['var(--display-font)'],
        ui: ['var(--font-reference-ui)'],
        script: ['var(--font-reference-script)'],
        callout: ['var(--font-reference-callout)'],
        body: ['var(--font-reference-body)'],
      },
      spacing: {
        'section-gap': 'var(--section-gap)',
        'hero-x': '18px',
        'hero-x-md': '24px',
        'hero-x-xl': '28px',
        'hero-bottom': '18px',
        'hero-bottom-md': '20px',
        'hero-bottom-xl': '18px',
        'hero-title-gap': '16px',
        'hero-title-gap-sm': '6px',
        'skill-card': 'calc(124px * var(--skill-card-scale))',
        'skill-pad-x': 'calc(10px * var(--skill-card-scale))',
        'skill-pad-y': 'calc(10px * var(--skill-card-scale))',
        'skill-frame-x': 'calc(7px * var(--skill-card-scale))',
        'skill-frame-top': 'calc(7px * var(--skill-card-scale))',
        'skill-frame-bottom': 'calc(4px * var(--skill-card-scale))',
        'skill-icon': 'calc(42px * var(--skill-card-scale))',
        'tape-w': 'calc(34px * var(--skill-card-scale))',
        'tape-h': 'calc(12px * var(--skill-card-scale))',
      },
      borderRadius: {
        card: 'var(--card-radius)',
        panel: '6px',
        pill: '18px',
      },
      boxShadow: {
        paper: '0 18px 0 rgba(10, 34, 58, 0.12)',
        'inset-frame': 'inset 0 0 0 3px rgba(0, 0, 0, 0.08)',
        'card-lift': '0 4px 0 rgba(0, 0, 0, 0.16)',
      },
    },
  },
} satisfies Config
