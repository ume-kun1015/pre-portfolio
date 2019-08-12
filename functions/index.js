const Routes = require('./serverMiddleware/routes')
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()
const router = express.Router()

const serverConfig = require('./portfolio.server.config')
const request = require('superagent')

const config = {
  dev: false,
  buildDir: 'ssr',
}

const nuxt = new Nuxt(config)

async function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  await nuxt.ready()
  return await nuxt.render(req, res)
}

const devPortfolioEnvs = functions.config().dev_portfolio

if (devPortfolioEnvs.portfolio_env === 'dev') {
  app.all('/*', basicAuth(devPortfolioEnvs.basic_auth_username, devPortfolioEnvs.basic_auth_password))
}

app.use(new Routes().addAll(router))

app.get('/api/ping', (req, res, next) => {
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

        res.status(err.status)
        res.json(portfolioError)
        return
      }

      res.status(err.status)
      res.json(err)
    })
})

app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)
