it("should work", () => {
  cy.origin("https://www.google.com", () => {
    const foo = Cypress.require("./foo");
    foo();
  });
})
