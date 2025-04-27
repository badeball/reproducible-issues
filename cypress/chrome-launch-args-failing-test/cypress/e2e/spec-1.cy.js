it("should work", () => {
  cy.visit("https://www.duckduckgo.com/");

  cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and(
      "match",
      /Search the web without being tracked|Search without being tracked/,
    );
})
