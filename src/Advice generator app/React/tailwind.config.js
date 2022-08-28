/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-cyan': '#CEE3E9',
        'neon-green': '#52FFA8',

        'grayish-blue': '#4E5D73',
        'dark-grayish-blue': '#323A49',
        'dark-blue': '#1F2632',

      },
    },
  },
  plugins: [],
}