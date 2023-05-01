const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    video: false,
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      on("before:spec", () => console.log("before:spec: invoked!"));

      on("file:preprocessor", createBundler());
    },
  },
});
