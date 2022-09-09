/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/images/desktop/image-hero.jpg')",
        'hero-mobile': "url('/src/assets/images/mobile/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}