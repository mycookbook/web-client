var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://localhost:8000/api/v1/"',
  IPINFO_TOKEN: '"13838312c2e092"',
  API_KEY: process.env.API_KEY,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  SERVER_ENDPOINT_OAUTH: '"https://www.tiktok.com/auth/authorize"',
  TIKTOK_CLIENT_KEY: '"aw2m32xifypveu7g"',
  TIKTOK_REDIRECT_URI: '"http://localhost:8000/api/v1/auth/tiktok"',
  TWITTER_BASE_URL: '""',
  PINTEREST_BASE_URL: '""',
  INSTAGRAM_BASE_URL: '""'
})
