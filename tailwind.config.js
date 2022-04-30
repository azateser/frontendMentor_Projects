module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['Lexend DecaLexend Deca', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                shoulders: ['Big Shoulders Display', 'cursive'],
                kumbh: ['Kumbh Sans', 'sans-serif'],
            },
            backgroundImage: {
                'profile-card-bg-top': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-top.svg')",
                'profile-card-bg-bot': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-bottom.svg')",
                'profile-card': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-card.svg')",

                'bg-intro-desktop': "url('/frontendMentor_Projects/src/Intro%20component%20with%20sign-up%20form/images/bg-intro-desktop.png')",
                'bg-intro-mobile': "url('frontendMentor_Projects/src/Intro%20component%20with%20sign-up%20form/images/bg-intro-mobile.png')",
            },
        },
    },
    plugins: [],
};