<template>
  <div class="portfolio-progress-bar">
    <div class="portfolio-progress-props">
      <p class="name">{{ skill.name }}: {{ skill.years }}</p>
      <p class="percent">{{ skill.percent }}%</p>
    </div>

    <div class="progress">
      <div ref="bar" class="progress-bar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skill } from '../../entities/skill'

const intersectionObserver = ref<IntersectionObserver | null>(null)

const props = defineProps<{
  skill: Skill
}>()

const bar = ref<HTMLElement | null>(null)

const activateProgress = (): void => {
  if (!bar.value) return
  bar.value.style.width = `${props.skill.percent}%`
}

onMounted(() => {
  const observeFunc = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      activateProgress()
    }
  }

  intersectionObserver.value = new IntersectionObserver((entries) => entries.forEach(observeFunc))
  if (intersectionObserver.value && bar.value) intersectionObserver.value.observe(bar.value)
})

onBeforeUnmount(() => {
  if (!intersectionObserver.value) return
  intersectionObserver.value.disconnect()
})
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
      background-color: #243447;
      border-radius: 50px;
      width: 0;
      transition: width 1s ease-in-out;
    }
  }
}
</style>
