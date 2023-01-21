<template>
  <div class="portfolio-slide-menu-opener" @click="open">
    <font-awesome-icon :icon="menuIconClass" class="menu-icon fa-2x" />
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  methods: {
    ...mapMutations({
      open: 'slide-menu/open',
    }),
  },
})
export default class PortfolioSlideMenuOpener extends Vue {
  menuIconClass: String[] = ['fas', 'bars']
}
</script>

<style lang="scss" scoped>
.portfolio-slide-menu-opener {
  cursor: pointer;

  .menu-icon {
    color: $blue;
  }
}
</style>
