var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://cookbookshq.test/api/v1/"',
  IPINFO_TOKEN: '"13838312c2e092"',
  REQUEST_HEADERS: {
    API_KEY: '"Id4BC5L9Q8OPZa72gnmoMVst1HPj2Yfj1dFlnGxvphVekBIIsL"',
    API_SECRET: '"eyJpdiI6ImE5NjlrSFQyczNEczZMRXh6OXh2MXc9PSIsInZhbHVlIjoiV0xDdnNCNzJ5S1lyeU9HbmRBRStSclpNc3U2VEVGK3IzRnZYOTVERmpjWUlVaFR1MFFDSXpwbkFoMzFNZjI1blFWUUZFMXU3QjdYQjg4dXFcL3VXOVVpbk8yNkhKckdMZlRVUDlvdGdMdURrPSIsIm1hYyI6ImQ4OTgzZGMwOWE1NTZmMjRkNGE0ZjVlYWRjNWVjNWIyOTk3YTI3MDg5NTBlYmRiNjY4NDE0YjlkYWRjZWE0ZjcifQ=="'
  }
})
