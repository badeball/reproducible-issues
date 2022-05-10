const { Given } = require("@cucumber/cucumber");

let attempt = 0;

Given("a step", () => {
  console.log("Trying…");

  if (attempt++ === 0) {
    throw new Error("YOLO!");
  }
});
