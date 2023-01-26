import vitePluginEslint from 'vite-plugin-eslint'

export default defineNuxtConfig({
  srcDir: 'src',

  telemetry: false,

  // modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  vite: {
    plugins: [vitePluginEslint()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/variables/colors.scss" as *;
            @use "@/assets/styles/variables/dimens.scss" as *;
            @use "@/assets/styles/styles.scss" as *;
          `,
        },
      },
    },
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  plugins: ['@/plugins/font-awesome.ts'],

  app: {
    /*
     ** Headers of the page
     */
    head: {
      titleTemplate: `%s | ROMUKEY PORTFOLIO`,
      meta: [
        { charset: 'utf-8' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no' },
        { hid: 'description', name: 'description', content: 'ROMUKEY Portfolio Built by Nuxtjs' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/s/images/logo.jpg' }],
      script: [{ src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=IntersectionObserver', defer: true }],
    },
  },

  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
  },
})
