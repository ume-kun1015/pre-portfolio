<template>
  <div ref="portfolioStrengthItemCard" class="portfolio-strength-item">
    <transition name="fade-in">
      <div v-if="displayed" class="portfolio-strength-item-wrapper">
        <div class="strength-icon">
          <font-awesome-icon class="fa-4x" :icon="iconStyle" />
        </div>
        <div class="strength-summary text-h3">
          {{ summary }}
        </div>
        <div class="strength-description">
          {{ description }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PortfolioStrengthItemCard extends Vue {
  displayed: Boolean = false
  intersectionObserver: IntersectionObserver | null = null

  @Prop({ type: String, default: '' })
  summary!: String

  @Prop({ type: String, default: '' })
  description!: String

  @Prop({ type: Array, default: () => [] })
  iconStyle!: String[]

  mounted(): void {
    const observeOptions = { rootMargin: '-150px' }
    const observeFunc = entry => {
      if (entry.isIntersecting) {
        this.fadeIn()
      }
    }

    this.intersectionObserver = new IntersectionObserver(entries => entries.forEach(observeFunc), observeOptions)
    if (this.intersectionObserver) this.intersectionObserver.observe(this.$refs.portfolioStrengthItemCard as HTMLElement)
  }

  beforeDestroy(): void {
    if (this.intersectionObserver) this.intersectionObserver.disconnect()
  }

  fadeIn(): void {
    this.displayed = true
  }
}
</script>

<style lang="scss" scoped>
.portfolio-strength-item {
  height: 300px;

  .fade-in-enter-active {
    transition: all 0.8s ease;
  }

  .fade-in-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-in-enter,
  .fade-in-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .portfolio-strength-item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 1em 2em;
    margin: 2em 0;
    box-shadow: 0 10px 16px 0 rgba(226, 226, 226, 0.5);
    border-radius: 50px;

    .strength-icon {
      color: $blue;
      margin: 10px;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      background: $dark_navy;
      position: relative;

      svg {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
    }

    .strength-summary {
      color: $blue;
      margin: 10px;
    }

    .strength-description {
      color: $dark_navy;
      margin: 10px;
    }
  }
}
</style>
