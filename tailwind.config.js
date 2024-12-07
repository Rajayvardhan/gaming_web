/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#152640',
          light: '#1f3a5f',
          dark: '#0c1829'
        },
        secondary: {
          DEFAULT: '#872E68',
          light: '#9d3579',
          dark: '#712757'
        }
      }
    },
  },
  plugins: [],
};