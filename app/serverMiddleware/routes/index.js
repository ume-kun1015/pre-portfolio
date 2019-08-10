import qiita from './qiita'

class Routes {
  addAll(router) {
    router.get('/qiita/items', qiita.getItems)

    return router
  }
}

export default new Routes()
