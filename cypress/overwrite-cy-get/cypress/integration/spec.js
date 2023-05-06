it("should work", () => {
  cy.visit("./index.html");
  cy.contains("Hello world!").should("have.length", 1)
});
