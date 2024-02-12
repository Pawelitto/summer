// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  colorMode: {
    preference: "light",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
