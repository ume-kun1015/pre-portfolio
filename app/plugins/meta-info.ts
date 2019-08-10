import { MetaInfo } from '../misc/meta-info'

export default (ctx, inject) => {
  ctx.$metaInfo = new MetaInfo()
  inject('metaInfo', new MetaInfo())
}
