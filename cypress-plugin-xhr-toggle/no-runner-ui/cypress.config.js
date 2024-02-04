const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    NO_COMMAND_LOG: 1
  },
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
