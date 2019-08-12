const qiita = require('./qiita')
const apicache = require('apicache')

const onlyStatus200 = (req, res) => res.statusCode === 200
const cacheSuccesses = apicache.middleware('1 hour', onlyStatus200)

module.exports = class Routes {
  addAll(router) {
    // qiitaの仕様だと1時間に60回しかリクエストが送れないみたいなので、オンメモリでキャッシュさせる。
    router.get('/qiita/items', cacheSuccesses, qiita.getItems)

    router.get('/healthcheck', (req, res) => {
      res.json({ healthcheck: 'OK' })
    })

    return router
  }
}
