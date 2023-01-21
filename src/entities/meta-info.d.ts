import { MetaInfo } from '../misc/meta-info'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $metaInfo: MetaInfo
  }
}
