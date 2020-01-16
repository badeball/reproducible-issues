it("should work", () => {
  cy.visit("./index.html");
  cy.get("span").trigger("mouseover");
});
