/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
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
        malibu:'#2BC0E4',
        malibu1:'#EAECC6',
        button:'#00F0FF'
      },
    },
  },
  plugins: [],
}
