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
        background: '#F6F2EA',
        foreground: '#1E1E1E',
        linen: '#F6F2EA',
        bone: '#EFE8DD',
        charcoal: {
          DEFAULT: '#1E1E1E',
          soft: '#6F6A63',
          graphite: '#6F6A63',
        },
        sage: {
          DEFAULT: '#9DAF9C',
          dark: '#6F8A74',
        },
        primary: {
          DEFAULT: '#9DAF9C',
          foreground: '#1E1E1E',
        },
        secondary: {
          DEFAULT: '#6F8A74',
          foreground: '#F6F2EA',
        },
        accent: {
          DEFAULT: '#9DAF9C',
          foreground: '#F6F2EA',
        },
        border: 'rgba(30, 30, 30, 0.1)',
        input: 'rgba(30, 30, 30, 0.1)',
        ring: '#9DAF9C',
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
