import { defineStore } from 'pinia'

export const useSlideMenuStore = defineStore('slide-menu', () => {
  const isOpened = ref(false)
  const open = (): void => {
    isOpened.value = true
  }
  const close = (): void => {
    isOpened.value = false
  }

  return { isOpened, open, close }
})
