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
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      borderRadius: {
        lg: '0px',
        md: '0px',
        sm: '0px',
      },
      colors: {
        background: '#E2DACD',
        foreground: '#1E1E1E',
        stone: '#E2DACD',
        clay: '#DED4C7',
        linen: '#E7DFD4',
        bone: '#F6F2EA',
        charcoal: {
          DEFAULT: '#1E1E1E',
          soft: '#3A3A3A',
          graphite: '#6F6A63',
        },
        sage: {
          DEFAULT: '#8B9B8A',
          dark: '#6F7B6D',
          muted: '#8B9B8A',
        },
        primary: {
          DEFAULT: '#1E1E1E',
          foreground: '#E2DACD',
        },
        secondary: {
          DEFAULT: '#8B9B8A',
          foreground: '#E2DACD',
        },
        accent: {
          DEFAULT: '#8B9B8A',
          foreground: '#E2DACD',
        },
        border: 'rgba(30, 30, 30, 0.08)',
        input: 'rgba(30, 30, 30, 0.08)',
        ring: '#8B9B8A',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
