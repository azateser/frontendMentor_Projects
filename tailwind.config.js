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
                fraunces: ['Fraunces', 'serif'],
                josefin: ['Josefin Sans', 'sans-serif'],
            },
            backgroundImage: {
                'profile-card-bg-top': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-top.svg')",
                'profile-card-bg-bot': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-bottom.svg')",
                'profile-card': "url('/frontendMentor_Projects/src/Profile card component/images/bg-pattern-card.svg')",

                'intro-desktop': "url('/frontendMentor_Projects/src/Intro%20component%20with%20sign-up%20form/images/bg-intro-desktop.png')",
                'intro-mobile': "url('/frontendMentor_Projects/src/Intro%20component%20with%20sign-up%20form/images/bg-intro-mobile.png')",

                'huddle-desktop': "url('/frontendMentor_Projects/src/Huddle%20landing%20page%20with%20a%20single%20introductory%20section/images/bg-desktop.svg')",

                'base-desktop': "url('/frontendMentor_Projects/src/Base%20Apparel%20coming%20soon%20page/images/bg-pattern-desktop.svg')",

                'social-desktop': "url('/frontendMentor_Projects/src/Social%20proof%20section/images/bg-pattern-bottom-desktop.svg')",

                'perfume-desktop': "url('/frontendMentor_Projects/src/Product%20preview%20card%20component/images/image-product-desktop.jpg')",
                'perfume-mobile': "url('/frontendMentor_Projects/src/Product%20preview%20card%20component/images/image-product-mobile.jpg')",
                
            },
        },
    },
    plugins: [],
};