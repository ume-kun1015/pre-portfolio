<template>
  <div>
    <portfolio-header />

    <nuxt />
  </div>
</template>

<script>
import PortfolioHeader from '~/components/organisms/portfolio-header.vue'

export default {
  components: {
    PortfolioHeader,
  },
}
</script>
