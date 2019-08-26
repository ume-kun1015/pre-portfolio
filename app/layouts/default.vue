<template>
  <div class="portfolio-default-layout">
    <portfolio-header />
    <portfolio-slide-menu />

    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

const PortfolioHeader = () => import('../components/organisms/portfolio-header.vue')
const PortfolioSlideMenu = () => import('../components/organisms/portfolio-slide-menu.vue')

@Component({
  components: {
    PortfolioHeader,
    PortfolioSlideMenu,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.portfolio-default-layout {
  height: 100vh;
}
</style>
