<template>
  <div class="portfolio-tech-blog">
    {{ techBlogItem.title }}
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  computed: {
    ...mapGetters({
      techBlogItem: 'tech-blog-item/techBlogItem',
    }),
  },
})
export default class TechBlog extends Vue {
  head() {
    return {
      title: this.techBlogItem.title,
    }
  }

  fetch({ app, params, store, error }) {
    return app.$axiosErrorHandler(store.dispatch('tech-blog-item/fetch', { id: params.id }), error)
  }
}
</script>

<style lang="scss" scoped>
.portfolio-tech-blog {
  background: $dark_navy;
  color: $blue;
  height: 100vh;

  .title {
    text-align: center;
  }
}
</style>
