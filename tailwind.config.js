/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- ¡La línea más importante!
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733',
        'secondary': '#33FFB0',
        'dark-bg': '#1a202c',
        'text-light': '#f7fafc',
      },
    },
  },
  plugins: [],
}