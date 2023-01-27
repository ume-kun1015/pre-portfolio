<template>
  <div class="portfolio-slide-menu-opener">
    <p @click="store.open">open</p>
    <!-- <font-awesome-icon :icon="menuIconClass" class="menu-icon fa-2x" /> -->
  </div>
</template>

<script setup lang="ts">
import { useSlideMenuStore } from '~/store/slide-menu'

const store = useSlideMenuStore()
</script>

<style lang="scss" scoped>
.portfolio-slide-menu-opener {
  cursor: pointer;

  .menu-icon {
    color: $blue;
  }
}
</style>
