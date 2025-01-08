// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from 'tailwindcss/colors'
export default defineNuxtConfig({
  future: {
      compatibilityVersion: 4,
    },
  devtools: { enabled: true },
  compatibilityDate: "2025-01-06",
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    defaults: {
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
  },
  nitro: {
    compressPublicAssets: { gzip: false, brotli: true },
    prerender: {
      autoSubfolderIndex: true,
      concurrency: 1,
      interval: 0,
      failOnError: false,
      crawlLinks: true,
      ignore: [],
      retryDelay: 5000,
    },
  },
//   tailwindcss: {
//     config: {
//         plugins: [
//             require('@tailwindcss/container-queries'),
//         ],
//       theme: {
//         extend: {
//             fontFamily: {
//                 sans: 'Fira Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
//                 handwritten: 'Ephesis, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
//               },
//             colors: {
//                 transparent: 'transparent',
//                 current: 'currentColor',
//                 black: colors.black,
//                 white: colors.white,
//                 gray: colors.zinc,
//                 blue: colors.blue,
//                 sky: colors.sky,
//                 green: colors.emerald,
//                 red: colors.red,
//                 yellow: colors.amber,
//                 orange: colors.orange,
//               },
              
//         }
//       }
//     }
//   }
})