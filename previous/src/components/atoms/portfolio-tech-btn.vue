<template>
  <nuxt-link to="/" class="portfolio-tech-btn">
    <font-awesome-icon class="tech-icon fa-2x" :icon="techIconClass" />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PortfolioTechBtn extends Vue {
  techIconClass: String[] = ['fas', 'desktop']
}
</script>

<style lang="scss" scoped>
.portfolio-tech-btn {
  display: block;

  .tech-icon {
    color: $blue;
  }
}
</style>
