const serverConfig = require('../../portfolio.server.config')
const request = require('superagent')

module.exports = {
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
        if (err.status == 403) {
          const errorMessage = '記事を取得するのにエラーが発生しました。しばらく時間を置いてから再度アクセスしてください。'
          const portfolioError = new Error(errorMessage)
          portfolioError.data = {
            code: err.status,
            name: 'Unauthorized',
            message: errorMessage,
          }

          return portfolioError
        }

        return err
      })
  },
}
