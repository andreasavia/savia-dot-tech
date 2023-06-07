/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'theblack': '#000000',
      'thewhite': '#FFFFFF',
      'thespark': '#BEF754',
    },
    extend: {},
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
}
