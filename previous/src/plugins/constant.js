import constant from '~~/previous/src/misc/constant'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      constant: () => constant,
    },
  }
})
