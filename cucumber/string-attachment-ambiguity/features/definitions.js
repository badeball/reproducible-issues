const { Given } = require("@cucumber/cucumber");

Given("a step", function () {
  const myString = "foobar"
  this.attach(myString, "text/plain");
  this.attach(Buffer.from(myString).toString("base64"), "base64:text/plain");
});
