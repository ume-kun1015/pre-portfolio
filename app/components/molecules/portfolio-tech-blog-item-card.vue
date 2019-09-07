<template>
  <div class="portfolio-tech-blog-item-card">
    <a :href="item.url" target="_blank" rel="noopener">
      <div class="item-title">
        {{ item.title }}
      </div>

      <div class="item-likes-count">
        いいね数 <font-awesome-icon class="likes-icon-class" :icon="likesIconClass" />{{ item.likes_count }}
      </div>

      <div class="item-tags">
        <ul>
          <li v-for="(tag, index) in item.tags" :key="index">
            {{ tag.name }}
          </li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { QiitaItem } from '../../entities/qiita-item'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PortfolioTechBlogItemCard extends Vue {
  likesIconClass: String[] = ['fas', 'thumbs-up']

  @Prop({ type: Object as () => QiitaItem, default: () => {} })
  item!: QiitaItem
}
</script>

<style lang="scss" scoped>
.portfolio-tech-blog-item-card {
  margin: 1.5em 0;
  padding: 0.75em;
  color: $dark_navy;
  background: $white;
  font-weight: bold;

  .item-title {
    margin-bottom: 1em;
  }

  .item-likes-count {
    margin: 1em 0;

    .likes-icon-class {
      margin-right: 0.5em;
    }
  }

  .item-tags {
    ul {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        margin: 0.25em 0.5em 0.25em 0;
        padding: 0.25em;
        border: 1px solid $dark_navy;
      }
    }
  }
}
</style>
