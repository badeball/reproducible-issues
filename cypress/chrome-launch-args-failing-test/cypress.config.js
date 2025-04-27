const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--guest");
        }
        return launchOptions;
      });
    },
  },
});
