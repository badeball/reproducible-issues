const { Given } = require("@cucumber/cucumber");

Given("a step", function () {
  this.attach("foo");
});
