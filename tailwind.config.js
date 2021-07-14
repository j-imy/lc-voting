const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {

            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                gray: 'colors.trueGray',
                black: 'colors.black',
                white: 'colors.white',
                'gray-background': '#f7f8fc',
                'blue': '#328af1',
                'gray': '#d3d3d3',
                'gray-100': '#E0E0E0',
                'gray-200': '#D3D3D3',
                'gray-300': '#BEBEBE',
                'gray-400': '#A9A9A9',
                'gray-500': '#909090',
                'blue-hover': '#A8A8A8',
                'yellow': '#ffc73c',
                'red': '#ec454f',
                'red-100' : '#fee2e2',
                'green': '#1aab8b',
                'purple': '#8b60ed',
                'white' : '#FFFFFF',
            },
            spacing: {
                22: '5.5rem',
                70: '17.5rem',
                175: '43.75rem',
                44: '11rem',
                76: '19rem',
                104: '26rem',
            },
            boxShadow: {
                card: '4px 4px 15px 0 rgba(36, 37, 38, 0.08)',
                dialog: '3px 4px 15px 0 rgba(36, 37, 38, 0.22)',
            },
            maxWidth: {
                custom: '68.5rem',
            },
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxs: ['0.65rem', { lineHeight: '1rem' }],
            },
            
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
],
};
