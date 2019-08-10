<template>
  <header class="portfolio-header">
    <div class="header-menu">
      <div class="title text-h2">
        <nuxt-link to="/">
          ROMUKEY
        </nuxt-link>
      </div>
      <portfolio-slide-menu-opener />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PortfolioSlideMenuOpener from '../molecules/portfolio-slide-menu-opener.vue'

@Component({
  components: {
    PortfolioSlideMenuOpener,
  },
})
export default class PortfolioHeader extends Vue {}
</script>

<style lang="scss" scoped>
.portfolio-header {
  padding: 1em 3.2%;
  background: $dark_navy;
  height: 100px;

  .header-menu {
    max-width: 960px;
    margin: 0 auto;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .title {
      color: $blue;
      width: 20%;

      a {
        text-decoration: none;
      }
    }
  }

  @media only screen and (max-width: $breakpoint-mobile) {
    .header-menu {
      .title {
        width: 50%;
      }
    }
  }
}
</style>
