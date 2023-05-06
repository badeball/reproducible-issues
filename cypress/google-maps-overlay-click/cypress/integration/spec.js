it("should work", () => {
  cy.visit("./index.html");
  cy.get("#map div[title=\"SS Anne\"]")
    .click({ force: false });
});
