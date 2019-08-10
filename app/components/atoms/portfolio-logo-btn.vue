<template>
  <nuxt-link to="/" class="portfolio-logo-btn">
    <img src="/s/images/logo.jpg" alt="logo" />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PortofolioLogoBtn extends Vue {}
</script>

<style lang="scss" scoped>
.portfolio-logo-btn {
  display: block;

  img {
    border-radius: 50%;
    border: solid 2px $white;
    height: 26px;
  }
}
</style>
