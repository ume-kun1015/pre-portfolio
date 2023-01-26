<template>
  <div class="portfolio-error-btn">
    <font-awesome-icon class="error-icon fa-7x" :icon="errorIconClass" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PortfolioErrorBtn extends Vue {
  errorIconClass: String[] = ['fas', 'exclamation-circle']
}
</script>

<style lang="scss" scoped>
.portfolio-error-btn {
  display: block;

  .error-icon {
    color: $blue;
  }
}
</style>
