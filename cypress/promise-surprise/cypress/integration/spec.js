const assert = require("assert");

it("should pass", () => {
  cy.wrap("foo").then(() => {
    return Promise.resolve("bar")
      .then(() => {
        return cy.wrap("baz");
      })
      .then(value => {
        assert.equal(value, "baz");
      });
  });
})