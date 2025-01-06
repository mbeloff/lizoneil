/* eslint-disable */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    "content": [
        // all directories and extensions will correspond to your Nuxt config
        "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
        "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
        "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
        "{srcDir}/plugins/**/*.{js,ts,mjs}",
        "{srcDir}/composables/**/*.{js,ts,mjs}",
        "{srcDir}/utils/**/*.{js,ts,mjs}",
        "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
        "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
        "{srcDir}/app.config.{js,ts,mjs}",
        "{srcDir}/app/spa-loading-template.html"
      ],
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ],
  theme: {
    extend: {
      transitionProperty: {
        spacing: 'margin, padding',
      },
      screens: {
        print: { raw: 'print' },
      },
      fontFamily: {
        sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.zinc,
        blue: colors.sky,
        green: colors.emerald,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
      },
    },
    variants: {
      extend: {
        scale: ['active', 'group-hover'],
        translate: ['group-hover'],
        borderRadius: ['first', 'last'],
        padding: ['hover'],
      },
    },
  },
}
