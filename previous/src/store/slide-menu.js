import { defineStore } from 'pinia'

export const useSlideMenuStore = defineStore('slide-menu', () => {
  const isOpened = ref(0)
  const open = () => {
    isOpened.value = true
  }
  const close = () => {
    isOpened.value = false
  }

  return { isOpened, open, close }
})
