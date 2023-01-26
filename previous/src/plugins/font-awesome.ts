import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin((nuxtApp) => {
  // This is important, we are going to let Nuxt.js worry about the CSS
  config.autoAddCss = false
  // You can add your icons directly in this plugin. See other examples for how you
  // can add other styles or just individual icons.
  library.add(fas)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
