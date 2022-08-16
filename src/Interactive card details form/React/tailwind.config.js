/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-desktop': "url('/src/images/bg-main-desktop.png')",
        'main-mobile': "url('/src/images/bg-main-mobile.png')",

        'card-front': "url('/src/images/bg-card-front.png')",
        'card-back': "url('/src/images/bg-card-back.png')",
      
      }
    },
  },
  plugins: [],
}