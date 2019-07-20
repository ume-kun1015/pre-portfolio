<template>
  <div class="portfolio-progress-bar">
    <p class="name">{{ name }}</p>

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
    name: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100',
    },
  },
  mounted() {
    this.$refs.bar.style.width = `${this.width}%`
  },
}
</script>

<style lang="scss" scoped>
.portfolio-progress-bar {
  width: 100%;
  padding: 10px;
  background-color: white;

  .name {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
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
