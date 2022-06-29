import { defineConfig } from 'cypress'
// import webpackPreprocessor from '@cypress/webpack-preprocessor'
// If you add webpack, import it here
// import webpackConfig from './webpack.config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    chromeWebSecurity: false,
    defaultCommandTimeout: 6000, // default value 4000
    specPattern: './src/modules/**/*.spec.ts',
    env: {
      apiUrl: 'http://127.0.0.1:4090',
      userEmail: 'info@rent.com',
      userPassword: 'mainPassword!@#$',
    },
    // supportFile: 'cypress/e2e/support/index.js',
    // fixturesFolder: 'cypress/e2e/fixtures',
    // downloadsFolder: 'cypress/e2e/downloads',
    // screenshotsFolder: 'cypress/e2e/screenshots',
    // videosFolder: 'cypress/e2e/videos',

    setupNodeEvents(on, config) {
      const options = {
        // TODO: webpack config that understands `#import` and `.graphql`.
        // webpackOptions: webpackConfig,
      }

      // Apply preprocessor to cypress/* files, and all spec files.
      // on('file:preprocessor', webpackPreprocessor(options))

      return config
    },
  },
})
