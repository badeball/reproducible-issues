const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = {
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", createBundler());
    },
  },
};
