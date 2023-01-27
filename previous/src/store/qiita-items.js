import { defineStore } from 'pinia'

export const useQiitaItemsStore = defineStore('qiita-items', () => {
  const items = ref(0)
  const setItems = (items) => {
    items.value = items
  }

  return { items, setItems }
})
