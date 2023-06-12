module.exports = {
  NODE_ENV: '"production"',
  BASE_URL: '"https://api.cookbookshq.com/api/v1/"',
  APP_URL: '"https://web.cookbookshq.com"',
  IPINFO_TOKEN: '"13838312c2e092"',
  SERVER_ENDPOINT_OAUTH: '"https://www.tiktok.com/auth/authorize"',
  TIKTOK_CLIENT_KEY: '"awzqdaho7oawcchp"',
  TIKTOK_REDIRECT_URI: '"https://web.cookbookshq.com/#/tiktok"',
  TALKIFY_KEY: '"a1ffee0c-61a1-4424-90c2-9988cc11c840"',
  TOKEN_VALIDATE_ENDPOINT: '"https://api.cookbookshq.com/api/v1/auth/validate"',
  SECRET_ACCESS_KEY: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY,
  ACCESS_KEY_ID: process.env.VUE_APP_AWS_ACCESS_KEY,
  AWS_BUCKET: process.env.VUE_APP_AWS_BUCKET,
  AWS_REGION: process.env.VUE_APP_AWS_REGION,
  DEV_TOKEN: process.env.VUE_APP_DEV_TOKEN
}
