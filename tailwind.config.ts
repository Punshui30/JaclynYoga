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
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#F6F2EA',
        foreground: '#2C2C2C', // Updated to Charcoal
        linen: '#F3EFE9',
        stone: '#CFC8BE',
        primary: {
          DEFAULT: '#9FAF9A', // Sage Green
          foreground: '#F6F2EA',
        },
        secondary: {
          DEFAULT: '#C6A38B', // Muted Clay
          foreground: '#2C2C2C',
        },
        accent: {
          DEFAULT: '#9FAF9A',
          foreground: '#F6F2EA',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          soft: '#4A4A4A',
        },
        'warm-gray': {
          DEFAULT: '#B8B4AD',
          light: '#D6D2CB',
        },
        border: 'rgba(44, 44, 44, 0.1)',
        input: 'rgba(44, 44, 44, 0.1)',
        ring: '#9FAF9A',
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
