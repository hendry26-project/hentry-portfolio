/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090d16',
          card: '#0f172a',
          hover: '#1e293b',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.08)',
        },
        cyan: {
          500: '#06b6d4',
          400: '#38bdf8',
        },
        emerald: {
          500: '#10b981',
        },
        indigo: {
          500: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)',
        'gradient-text': 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
      }
    },
  },
  plugins: [],
}
