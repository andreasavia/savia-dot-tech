/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'mont': ['Montserrat']
    },
    extend: {
      colors: {
        'theblack': '#000000',
        'thewhite': '#FFFFFF',
        'thespark': '#BEF754',
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
}
