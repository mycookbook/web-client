# web_client

> Web client for cookbook

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Running Tests Locally

To run the end-to-end (E2E) tests locally, follow these steps:

### Prerequisites

1. **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from the official website: [https://nodejs.org/](https://nodejs.org/)

2. **Dependencies**: Install project dependencies by running the following command in your terminal at the root of the project:

   ```sh
   npm install


## Running Tests

1. **Configuration**: Make sure you have properly configured Nightwatch.js for your project. Check the `nightwatch.conf.js` file in the root directory.

2. **Run Tests**: Execute the E2E tests using the following command:

   ```sh
   npm run test


## Running Tests With Coverage

1. **Run Tests**: Execute the E2E tests with coverage using the following command:

   ```sh
  npm run test:e2e:coverage

## Viewing Coverage (Optional)

If you're interested in viewing code coverage for the tests, follow these steps:

1. **Install Istanbul/NYC**: Install the necessary packages by running:

   ```sh
   npm install nyc --save-dev

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Staging url
https://cookbookshq-staging-web.herokuapp.com/#/


