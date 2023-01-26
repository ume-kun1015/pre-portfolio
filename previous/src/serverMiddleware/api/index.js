import express from 'express'
import routes from '../routes'

const router = express.Router()
const app = express()

app.disable('x-powered-by')

app.use(routes.addAll(router))

export default {
  path: '/api',
  handler: app,
}
