const prdUrl = 'https://portfolio-3bcd1.firebaseapp.com'
const devUrl = 'https://dev-portfolio-6bfd1.firebaseapp.com/'
const localUrl = 'http://localhost:3000'

function getRootUrl() {
  switch (process.env.portfolio_env) {
    case 'prd':
      return prdUrl
    case 'dev':
      return devUrl
    default:
      return localUrl
  }
}

module.exports = {
  api: {
    baseURL: `${getRootUrl()}/api`,
    browserBaseURL: `${getRootUrl()}/api`,
  },
  twitter: {
    url: 'https://twitter.com/romukey',
  },
  github: {
    url: 'https://github.com/romukey',
  },
}
