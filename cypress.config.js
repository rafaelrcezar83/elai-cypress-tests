const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://elai-63aae.web.app',
    supportFile: 'cypress/support/commands.js',
  }
})
