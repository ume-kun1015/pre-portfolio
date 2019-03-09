<template>
  <div class="portfolio-slide-menu-opener">
    <font-awesome-icon
      :icon="menuIconClass"
      class="menu-icon fa-2x"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuIconClass: ['fas', 'bars'],
    }
  },
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
