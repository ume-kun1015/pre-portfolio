<template>
  <a
    :href="twitterUrl"
    class="portfolio-twitter-btn"
  >
    <font-awesome-icon class="twitter-icon fa-2x" :icon="twitterIconClass" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      twitterIconClass: ['fab', 'twitter'],
      twitterUrl: 'https://twitter.com/romukey',
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-twitter-btn {
  display: block;

  .twitter-icon {
    color: $blue;
  }
}
</style>
