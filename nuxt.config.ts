// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    },
  ],

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],

  nitro: {
    preset: 'cloudflare_pages',
  },

  vite: {
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
})
