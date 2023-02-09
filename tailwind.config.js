/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    fontFamily: {
      display: [ 'Oswald'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blackish: '#131313',
        bluelightish: '#17314d',
        purplish: '#e645ed',
        blubutton: '#2764d8',
        header:'#2b5ace',
      },
    },
  },
  plugins: [],
}
