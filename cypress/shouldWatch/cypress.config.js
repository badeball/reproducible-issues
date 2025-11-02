module.exports = {
  watchForFileChanges: false,
  e2e: {
    specPattern: "**/*.bar",
    setupNodeEvents(on) {
      on("file:preprocessor", async ({ filePath, shouldWatch }) => {
        console.log("shouldWatch", shouldWatch);
        return filePath;
      });
    },
  },
};
