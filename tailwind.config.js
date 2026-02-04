/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#f4c430',
          red: '#c41e3a',
          dark: '#333333',
          white: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        museo: ['MuseoSlab500Regular', '"Open Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
