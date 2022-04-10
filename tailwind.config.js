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
            },
        },
    },
    plugins: [],
};