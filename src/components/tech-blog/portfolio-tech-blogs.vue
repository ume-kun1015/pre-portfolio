<template>
  <div class="portfolio-tech-blog-item-cards">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <portfolio-tech-blog-item-card :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { QiitaItem } from '../../types/qiita-item'

const items = ref<QiitaItem[]>([])
</script>

<style lang="scss" scoped>
.portfolio-tech-blog-item-cards {
  max-width: 940px;
  margin: 0 auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 32%;
    }
  }

  @media only screen and (max-width: $breakpoint-mobile) {
    ul {
      display: block;

      li {
        width: 100%;
      }
    }
  }
}
</style>
