import serverConfig from '../../../portfolio.server.config'
import request from 'superagent'

export default {
  getItems(req, res, next) {
    request
      .get(serverConfig.qiita.itemApi)
      .then(response => {
        response.body.forEach(element => {
          delete element.user
          delete element.body
          delete element.rendered_body
        })
        res.json(response.body)
      })
      .catch(err => {
        // TODO: エラーハンドリング。一旦qiita側でエラーだったら、空の配列を返す。
        res.json([])
      })
  },
}
