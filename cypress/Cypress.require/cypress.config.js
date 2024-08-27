const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({})
      );

      return config;
    },
    experimentalOriginDependencies: true,
  },
});
