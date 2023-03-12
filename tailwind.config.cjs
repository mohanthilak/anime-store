/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'tanjiro': "url(./src/pages/HomeAfterLogin/tanjiro.webp)"
      }
    },
  },
  plugins: [],
}
