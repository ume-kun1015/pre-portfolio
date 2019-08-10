<template>
  <div class="portfolio-error-layout">
    <div class="portfolio-error-wrapper">
      <portfolio-error-btn class="error-icon" />

      <div class="error-text">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Error } from '../entities/error'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import PortfolioErrorBtn from '../components/atoms/portfolio-error-btn.vue'

@Component({
  components: {
    PortfolioErrorBtn,
  },
})
export default class ErrorLayout extends Vue {
  notFoundMessage: String = 'ページが見つかりません'

  @Prop({ type: Error, default: () => {} })
  error!: Error

  head() {
    return {
      title: this.notFoundMessage,
      meta: [this.$metaInfo.getNoIndexNoFollow()],
    }
  }

  private get errorMessage(): String {
    return this.error.statusCode === 404 ? this.notFoundMessage : this.error.message
  }
}
</script>

<style lang="scss" scoped>
.portfolio-error-layout {
  background: $dark_navy;
  height: calc(100vh - 100px);

  .portfolio-error-wrapper {
    padding: 100px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error-text {
      color: $blue;
      margin-top: 50px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
