<template>
  <ul class="portfolio-header-sns">
    <li>
      <portfolio-github-btn />
    </li>
    <li>
      <portfolio-twitter-btn />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

const PortfolioGithubBtn = () => import('../atoms/portfolio-github-btn.vue')
const PortfolioTwitterBtn = () => import('../atoms/portfolio-twitter-btn.vue')

@Component({
  components: {
    PortfolioGithubBtn,
    PortfolioTwitterBtn,
  },
})
export default class PortfolioHeaderSns extends Vue {}
</script>

<style lang="scss" scoped>
.portfolio-header-sns {
  display: flex;
  justify-content: space-evenly;

  li {
    margin: 0 10px;
  }
}
</style>
