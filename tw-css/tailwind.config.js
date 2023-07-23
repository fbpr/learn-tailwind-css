/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // darkMode: 'media',
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      sm: '450px',
      lg: '1040px',
    },
    fontFamily: {
      lobster: ['Lobster', 'cursive']
    }
  },
  plugins: [],
}

