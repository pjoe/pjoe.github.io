/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#121212',
          light: '#1e1e1e'
        },
        text: {
          primary: '#e2e2e2',
          secondary: '#a0a0a0',
          accent: '#6fcfcf'
        },
        accent: {
          primary: '#6fcfcf',
          secondary: '#4a9e9e',
          hover: '#8ae0e0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
