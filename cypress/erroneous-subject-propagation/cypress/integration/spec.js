it("should work", () => {
  cy.visit("./index.html");
  cy.get("p").each(() =>  {}); // Switch from .each(..) to .then(..) to see the test pass.
  cy.myCommand();
});
