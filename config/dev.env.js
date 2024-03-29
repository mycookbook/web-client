module.exports = {
  NODE_ENV: '"development"',
  BASE_URL: process.env.VUE_APP_API,
  APP_URL: process.env.VUE_APP_APP_URL,
  IPINFO_TOKEN: process.env.VUE_APP_IPINFO_TOKEN,
  TALKIFY_KEY: process.env.VUE_APP_TALKIFY_KEY,
  TOKEN_VALIDATE_ENDPOINT: process.env.VUE_APP_TOKEN_VALIDATE_ENDPOINT,
  DEV_USERNAME:  process.env.VUE_APP_USERNAME,
  DEV_TOKEN: process.env.VUE_APP_DEV_TOKEN,
  SECRET_ACCESS_KEY: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY,
  ACCESS_KEY_ID: process.env.VUE_APP_AWS_ACCESS_KEY,
  AWS_BUCKET: process.env.VUE_APP_AWS_BUCKET,
  AWS_REGION: process.env.VUE_APP_AWS_REGION,
  PEXEL_API_KEY: process.env.VUE_APP_PEXEL_API_KEY
}
