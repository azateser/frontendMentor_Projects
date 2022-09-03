/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'work': 'hsl(15, 100%, 70%)',
        'play': 'hsl(195, 74%, 62%)',
        'study': 'hsl(348, 100%, 68%)',
        'exercise': 'hsl(145, 58%, 55%)',
        'social': 'hsl(264, 64%, 52%)',
        'self_care': 'hsl(43, 84%, 65%)',
        'main-blue': 'hsl(246, 80%, 60%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'soft-blue': '#34397b',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)'
      },
      backgroundImage:{
        'img-work': "url('./assets/images/icon-work.svg')",
        'img-play': "url('./assets/images/icon-play.svg')",
        'img-study': "url('./assets/images/icon-study.svg')",
        'img-exercise': "url('./assets/images/icon-exercise.svg')",
        'img-social': "url('./assets/images/icon-social.svg')",
        'img-self_care': "url('./assets/images/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
}