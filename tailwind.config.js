/** @type {import('tailwindcss').Config} */
export default {
  // Vite React Project
  content: ['index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'raleway'],
      }
    },
  },
  plugins: [],
}

