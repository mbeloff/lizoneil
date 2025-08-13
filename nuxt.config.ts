// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from "tailwindcss/colors";
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
      families: {
        sans: ["Source Sans 3", "sans-serif"],
      },
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
});
