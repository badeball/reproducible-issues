const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.cypress.io/",
    video: false,
    numTestsKeptInMemory: 0,
    taskTimeout: 5000,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      on("task", {
        "foobar"() {
          return true;
        }
      })

      return config;
    },
  },
});
