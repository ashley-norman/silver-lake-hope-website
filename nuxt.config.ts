import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    contentfulPreviewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,

    public: {
      contentfulPreviewSecret: process.env.CONTENTFUL_PREVIEW_SECRET,
    },
  },
})
