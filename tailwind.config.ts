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
        lg: '8px',
        md: '4px',
        sm: '2px',
      },
      colors: {
        background: '#E2DACD',
        foreground: '#1E1E1E',
        stone: '#E2DACD',
        clay: '#DED4C7',
        linen: '#E7DFD4',
        bone: '#F6F2EA',
        charcoal: {
          DEFAULT: '#2B2B2B',
          soft: '#3A3A3A',
          graphite: '#6F6A63',
        },
        luxuryIvory: '#F3EDE4',
        luxuryBeige: '#E6D8C8',
        sageGray: '#7A8A7A',
        warmGray: '#706C68',
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
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
