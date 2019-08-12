require('dotenv').config()

const portfolioContext = require('./portfolio.config.js')
const { BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD, PORTFOLIO_ENV } = process.env

module.exports = {
  mode: 'universal',
  srcDir: 'app',

  env: {
    portfolio: portfolioContext,
    BASIC_AUTH_USERNAME,
    BASIC_AUTH_PASSWORD,
    PORTFOLIO_ENV,
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s | ROMUKEY PORTFOLIO`,
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no' },
      { hid: 'http-equiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'description', name: 'description', content: 'ROMUKEY Portfolio Built by Nuxtjs' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/s/images/logo.jpg' }],
    script: [{ src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=IntersectionObserver', defer: true }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~assets/styles/styles.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/constant.js', '~/plugins/meta-info.ts', '~/plugins/portfolio-context.js', '~/plugins/axios-error-handler.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far'],
          },
        ],
      },
    ],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: portfolioContext.api.baseURL,
    browserBaseURL: portfolioContext.api.browserBaseURL,
  },

  styleResources: {
    scss: './assets/styles/variables/*.scss',
  },

  serverMiddleware: ['~/serverMiddleware/api/index.js'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        const StylelintPlugin = require('stylelint-webpack-plugin')
        config.plugins.push(
          new StylelintPlugin({
            files: ['app/**/*.vue', 'app/**/*.scss'],
          })
        )
      }
    },
  },
}
