var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_URL: '"http://localhost:5001"',
  BASE_URL: '"https://api.cookbookshq.com/api/v1/"',
  IPINFO_TOKEN: '"13838312c2e092"',
  API_KEY: process.env.API_KEY,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  SERVER_ENDPOINT_OAUTH: '"https://www.tiktok.com/auth/authorize"',
  TIKTOK_CLIENT_KEY: '"aw2m32xifypveu7g"',
  TIKTOK_REDIRECT_URI: '"http://localhost:8080/api/v1/auth/tiktok"',
  TWITTER_BASE_URL: '""',
  PINTEREST_BASE_URL: '""',
  INSTAGRAM_BASE_URL: '""',
  VUE_APP_AWS_SECRET_ACCESS_KEY: '"CmmmQjpOqI7ZP1QLOU8Oeehi3EvJ8+/PnirlD/Aq"',
  VUE_APP_AWS_ACCESS_KEY: '"AKIAZCORHJYJTF5NPEWW"',
  // VUE_APP_AWS_BUCKET:'"arn:aws:s3:::cookbookshq"',
  VUE_APP_AWS_REGION: '"us-east-2"',
  VUE_APP_AWS_BUCKET:'"cookbookshq"',
})
