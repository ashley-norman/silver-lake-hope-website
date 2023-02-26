import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
      title: "Silver Lake Property Owners Association",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Located in Hope, New Jersey, Silver Lake is a private lake managed by the Silver Lake Property Owners Association. Members have access to the lake, beach, fishing dock, boat area, and large grassy field. Members can also reserve the area for events and parties.",
        },
      ],
    },
  },
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
  css: [
    "@/assets/css/main.css",
    "@/assets/css/hamburger.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      contentfulPreviewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      contentfulPreviewSecret: process.env.CONTENTFUL_PREVIEW_SECRET,
    },
  },
})
