import { MetaInfo } from '../misc/meta-info'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      metaInfo: (): MetaInfo => new MetaInfo(),
    },
  }
})
