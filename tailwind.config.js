/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      maxWidth: {
        container: '1280px'
      },
    },
  },
  plugins: [],
}

