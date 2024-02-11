const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento2-demo.magebit.com/',
    "viewportHeight": 766,
    "viewportWidth": 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
