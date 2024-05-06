// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: ['v-wave/nuxt', 'nuxt-icon', "@nuxtjs/i18n"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  }
})