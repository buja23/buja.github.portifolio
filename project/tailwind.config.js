/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505',
          panel: 'rgba(10, 13, 15, 0.65)',
        },
        cyan: {
          DEFAULT: '#00d4ff',
          glow: 'rgba(0, 212, 255, 0.5)',
          muted: 'rgba(0, 212, 255, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 15px rgba(0, 212, 255, 0.2), inset 0 0 10px rgba(0, 212, 255, 0.1)',
      },
      keyframes: {
        scan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '100%' },
        }
      },
      animation: {
        scan: 'scan 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
