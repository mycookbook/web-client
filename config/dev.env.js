var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_URL: '"http://localhost:5001"',
  BASE_URL: '"http://localhost:8080/api/v1/"',
  IPINFO_TOKEN: '"13838312c2e092"',
  API_KEY: process.env.API_KEY,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  SERVER_ENDPOINT_OAUTH: '"https://www.tiktok.com/auth/authorize"',
  TIKTOK_CLIENT_KEY: '"aw2m32xifypveu7g"',
  TIKTOK_REDIRECT_URI: '"http://localhost:8080/api/v1/auth/tiktok"',
  TWITTER_BASE_URL: '""',
  PINTEREST_BASE_URL: '""',
  INSTAGRAM_BASE_URL: '""',
  DEV_TOKEN: '"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2Njc2MTMwMjYsImV4cCI6MTY2NzY5OTQyNiwibmJmIjoxNjY3NjEzMDI2LCJqdGkiOiJ5RFh4TEoxTUZXR2NaTFhVIiwic3ViIjoyMiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.zNHOmdKRfaQFA0kaCKP3EkQ0Kns0CHFfvUP2B11R8k4"'
})
