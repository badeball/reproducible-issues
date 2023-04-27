const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      on("before:spec",() => console.log("before:spec: invoked!"))
    },
  },
});
