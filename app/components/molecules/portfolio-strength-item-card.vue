<template>
  <div class="portfolio-strength-item">
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
</template>

<script>
export default {
  props: {
    summary: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    iconStyle: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-strength-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em 2em;
  margin: 2em 0;
  box-shadow: 0 10px 16px 0 rgba(226, 226, 226, 0.5);
  border-radius: 50px;
  height: 300px;

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
</style>
