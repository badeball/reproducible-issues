const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      // Remove the following block (custom preprocessor) and the example runs.
      on(
        "file:preprocessor",
        createBundler({})
      );

      return config;
    },
    experimentalOriginDependencies: true,
  },
});
