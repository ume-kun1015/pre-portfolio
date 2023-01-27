<template>
  <a :href="$portfolio.github.url" class="portfolio-github-btn">
    <font-awesome-icon class="github-icon fa-2x" :icon="githubIconClass" />
  </a>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PortfolioGithubBtn extends Vue {
  githubIconClass: String[] = ['fab', 'github']
}
</script>

<style lang="scss" scoped>
.portfolio-github-btn {
  display: block;

  .github-icon {
    color: $blue;
  }
}
</style>
