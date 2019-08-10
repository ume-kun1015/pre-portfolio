import qiita from './qiita'
import apicache from 'apicache'

const onlyStatus200 = (req, res) => res.statusCode === 200
const cacheSuccesses = apicache.middleware('1 hour', onlyStatus200)

class Routes {
  addAll(router) {
    // qiitaの仕様だと1時間に60回しかリクエストが送れないみたいなので、オンメモリでキャッシュさせる。
    router.get('/qiita/items', cacheSuccesses, qiita.getItems)

    return router
  }
}

export default new Routes()
