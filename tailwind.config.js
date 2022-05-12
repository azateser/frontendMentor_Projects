module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['Lexend DecaLexend Deca', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                shoulders: ['Big Shoulders Display', 'cursive'],
                kumbh: ['Kumbh Sans', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'profile-card-bg-top': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-top.svg')",
                'profile-card-bg-bot': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-bottom.svg')",
                'profile-card': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-card.svg')",

                'bg-intro-desktop': "url('/frontendMentor_Projects/src/Intro%20component%20with%20sign-up%20form/images/bg-intro-desktop.png')",
                'bg-intro-mobile': "url('/frontendMentor_Projects/src/Intro%20component%20with%20sign-up%20form/images/bg-intro-mobile.png')",

                'bg-huddle-desktop': "url('/frontendMentor_Projects/src/Huddle%20landing%20page%20with%20a%20single%20introductory%20section/images/bg-desktop.svg')",

                'bg-base-desktop': "url('/frontendMentor_Projects/src/Base%20Apparel%20coming%20soon%20page/images/bg-pattern-desktop.svg')",

                'bg-social-desktop': "url('/frontendMentor_Projects/src/Social%20proof%20section/images/bg-pattern-bottom-desktop.svg')",
            },
        },
    },
    plugins: [],
};