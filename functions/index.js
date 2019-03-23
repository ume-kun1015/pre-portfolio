const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

const config = {
  dev: false,
  buildDir: 'ssr',
}

const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

if (process.env.PORTFOLIO_ENV === 'dev') {
  require('dotenv').config({ path: '../.env' })
  app.all('/*', basicAuth(process.env.BASIC_AUTH_USERNAME, process.env.BASIC_AUTH_PASSWORD))
}

app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)
