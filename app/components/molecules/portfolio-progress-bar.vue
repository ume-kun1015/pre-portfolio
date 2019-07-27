<template>
  <div class="portfolio-progress-bar">
    <div class="portfolio-progress-props">
      <p class="name">{{ skill.name }}: {{ skill.years }}</p>
      <p class="percent">{{ skill.percent }}%</p>
    </div>

    <div class="progress">
      <!-- eslint-disable vue/html-self-closing -->
      <div ref="bar" class="progress-bar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      intersectionObserver: null,
    }
  },

  mounted() {
    const observeFunc = entry => {
      if (entry.isIntersecting) {
        this.activateProgress()
      }
    }

    this.intersectionObserver = new IntersectionObserver(entries => entries.forEach(observeFunc))
    this.intersectionObserver.observe(this.$refs.bar)
  },

  beforeDestroy() {
    this.intersectionObserver.disconnect()
  },

  methods: {
    activateProgress() {
      this.$refs.bar.style.width = `${this.skill.percent}%`
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-progress-bar {
  width: 100%;
  padding: 10px;
  background-color: white;

  .portfolio-progress-props {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      font-size: 13px;
      font-weight: 700;
    }
  }

  .progress {
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

    .progress-bar {
      height: 100%;
      background-color: $dark_navy;
      border-radius: 50px;
      width: 0;
      transition: width 1s ease-in-out;
    }
  }
}
</style>
