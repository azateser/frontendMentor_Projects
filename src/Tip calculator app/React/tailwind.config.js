/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan':'hsl(172, 67%, 45%)',
        'very-dark-cyan':'hsl(183, 100%, 15%)',
        'grayish-cyan':'hsl(184, 14%, 56%)',
        'light-grayish-cyan':'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan':'hsl(189, 41%, 97%)',
      }
    },
  },
  plugins: [],
}