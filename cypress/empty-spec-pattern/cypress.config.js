const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      /**
       * This should make Cypress yield a "no specs found" error.
       *
       * This stops being the case if `specPattern` is an array.
       */
      config.specPattern = [];
      return config;
    },
    specPattern: "**/*.cy.js",
    // specPattern: ["**/*.cy.js"], // Comment in this line to make the error disappear.
  },
});
