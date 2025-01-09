// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "static",
  },
  runtimeConfig: {
    public: {
      siteBaseUrl: "https://www.funngro.com",
    },
  },
  app: {
    head: {
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639027faf1ad11385febb588_Favicon.svg" },
        { rel: "apple-touch-icon", href: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639027fecedc3fea202883be_Webclip.svg" },
        ],
    },
  },
  vite: {
    esbuild: {
      legalComments: "none",
    },
    build: {
      terserOptions: {
        format: {
          comments: false,
        },
      },
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
