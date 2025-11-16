/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00E08E',
          50: '#E6FFF6',
          100: '#B8FFE3',
          200: '#8AFFD0',
          300: '#5CFFBD',
          400: '#2EFFAA',
          500: '#00E08E',
          600: '#00B272',
          700: '#008456',
          800: '#00563A',
          900: '#00281E'
        }
      }
    },
  },
  plugins: [],
}
