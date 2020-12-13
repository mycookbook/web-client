var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  IPINFO_TOKEN: '"13838312c2e092"',
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET
})
