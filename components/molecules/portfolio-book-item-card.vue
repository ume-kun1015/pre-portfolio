<template>
  <div class="portfolio-book-item-card">
    <div class="portfolio-book-url">
      <img :src="url">
    </div>
    <div class="portfolio-book-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-book-item-card {
  .portfolio-book-url {
    text-align: center;
  }
}
</style>
