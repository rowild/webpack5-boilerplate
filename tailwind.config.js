const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: [
    './dist/*.html',
    './build/*.html',
    './src/templates_pug/*.pug',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Marcellus', 'Georgia', 'Cambria', 'serif'],
      'marcellus': ['Marcellus', 'serif'],
      'abel': ['Abel', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '40rem', // '640px'
      md: '48rem', // '768px' - 1023px (63.9999)
      lg: '64rem', // '1024px',
      xl: '80rem', //'1280px'
      '2xl': '1536px',
    },
    extend: {
      borderRadius: {
        full: '99px',
        fuller: '9999px',
        '192': '12rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        'warm-gray': colors.warmGray,
        'true-gray': colors.trueGray,
        red: colors.red,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
