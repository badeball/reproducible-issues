const { defineConfig } = require("cypress");
const example = require("./example-module");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      example.default();
    },
  },
});