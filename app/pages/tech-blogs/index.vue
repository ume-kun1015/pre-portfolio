<template>
  <div class="portfolio-tech-blogs">
    <div class="portfolio-tech-blogs-content">
      <h1 class="text-h2">{{ pageTitle }}</h1>

      {{ items }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

const PortfolioTechBlogItemCards = () => import('../../components/organisms/portfolio-tech-blog-item-cards.vue')

@Component({
  components: {
    PortfolioTechBlogItemCards,
  },
})
export default class TechBlogsIndex extends Vue {
  items: any[] = []
  pageTitle: String = 'TECH BLOGS'

  head() {
    return {
      title: this.pageTitle,
    }
  }

  async asyncData({ app, error, store }) {
    const snapshot = await app.$firestore.collection('tech-blog-items').get()

    return { items: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) }
  }
}
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
