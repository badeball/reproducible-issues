const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "https://www.ag-grid.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
