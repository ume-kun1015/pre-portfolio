<template>
  <div class="portfolio-tech-blogs">
    <div class="portfolio-tech-blogs-content">
      <h1 class="text-h2">{{ pageTitle }}</h1>

      <p>Comming soon...</p>

      <portfolio-tech-blog-item-cards :items="[]" />
    </div>
  </div>
</template>

<script setup lang="ts">
// // import { storeToRefs } from 'pinia'
// import { useQiitaItemsStore } from '~/store/qiita-items'

// const store = useQiitaItemsStore()
// const { items } = storeToRefs(store)

const pageTitle = 'TECH BLOGS'

useHead(() => {
  return { title: 'TECH BLOGS' }
})
</script>

<style lang="scss" scoped>
.portfolio-tech-blogs {
  background: $dark_navy;
  color: $blue;
  height: calc(100vh - 100px);

  .portfolio-tech-blogs-content {
    max-width: 960px;
    margin: 0 auto;
    padding: 1em 0;

    @media only screen and (max-width: $breakpoint-mobile) {
      padding: 1em 3.2%;
    }
  }
}
</style>
