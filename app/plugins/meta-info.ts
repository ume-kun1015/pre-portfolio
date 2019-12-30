import { MetaInfo } from '../misc/meta-info'

export default (ctx: any, inject: any) => {
  ctx.$metaInfo = new MetaInfo()
  inject('metaInfo', new MetaInfo())
}
