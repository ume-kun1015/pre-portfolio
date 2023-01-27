<template>
  <div class="portfolio-default-layout">
    <portfolio-header />
    <portfolio-slide-menu />

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.portfolio-default-layout {
  height: 100vh;
}
</style>
