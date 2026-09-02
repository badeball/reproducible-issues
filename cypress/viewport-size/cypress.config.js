const { defineConfig } = require("cypress");
const fs = require("fs/promises");
const { PNG } = require("pngjs");
const assert = require("assert");

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "electron" && browser.isHeadless) {
          console.log("Assigning launch preferances!");
          launchOptions.preferences.width = 1280;
          launchOptions.preferences.height = 720;
        }
        return launchOptions;
      });

      on("after:screenshot", async (details) => {
        const data = await fs.readFile(details.path);

        const png = await new Promise((resolve, reject) => {
          new PNG().parse(
            data,
            function (error, data) {
              if (error) {
                reject(error);
              } else {
                resolve(data);
              }
            },
          );
        });

        const expectedDimensions = {
          width: 1280,
          height: 720,
        };

        const { width: actualWidth, height: actualHeight } = png;

        assert.strictEqual(actualWidth, expectedDimensions.width);
        assert.strictEqual(actualHeight, expectedDimensions.height);

        return true;
      });
    },
  },
});
