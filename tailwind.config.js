const colors = require('tailwindcss/colors');

module.exports = {
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Fira Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        handwritten: 'Ephesis, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.zinc,
        blue: colors.blue,
        sky: colors.sky,
        green: colors.emerald,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
      },
    },
  },
};
