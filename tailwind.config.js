const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",

],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        xs: '1rem'
      },
    },
    screens: {
      'xs': '0px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: "Work Sans",
        display: "Wonder Unit Sans Medium"
      },
      spacing: {
        '1/1': '100%'
      },
      colors: {
        'bluegreen': {
          DEFAULT: '#00a878',
          light: '#33b993'
        },
        'deepsea-blue': {
          DEFAULT: '#19535f',
          light: '#47757f'
        },
        'veryred': '#DC2626',
        'dutch-white': '#D7C9AA',
        'darkpurple': {
          dark: '#30011E',
          DEFAULT: '#451a35',
          light: '#59344b'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
],
}
