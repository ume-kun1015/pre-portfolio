<template>
  <div class="portfolio-error-layout">
    <div class="portfolio-error-wrapper">
      <div class="error-text">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Error } from '../types/error'

const props = defineProps<{
  error: Error
}>()

const notFoundMessage = 'ページが見つかりません'

const errorMessage = computed(() => {
  return props.error.statusCode === 404 ? notFoundMessage : props.error.message
})
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
