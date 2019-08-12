<template>
  <div class="portfolio-strengths-index">
    <div class="portfolio-strengths-content">
      <h1 class="text-h2">{{ pageTitle }}</h1>

      <p>Comming soon...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class PortfolioStrengthsIndex extends Vue {
  pageTitle: String = '自分の強み'

  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-strengths-index {
  background: $dark_navy;
  color: $blue;
  height: calc(100vh - 100px);

  .portfolio-strengths-content {
    max-width: 960px;
    margin: 0 auto;
    padding: 1em 0;

    @media only screen and (max-width: $breakpoint-mobile) {
      padding: 1em 3.2%;
    }
  }
}
</style>
