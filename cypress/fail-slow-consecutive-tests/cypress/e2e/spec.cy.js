for (let x = 0; x < 10; x++) {
  it.skip("should fail", () => {
    for (let i = 0; i < 100; i++) {
      cy.request("http://localhost:8080")
        .its("body")
        .its("lipsum")
        .invoke("split", " ")
        .should("have.length.gt", 100)
    }

    cy.visit("page1.html");

    cy.wrap(null).then(() => {
      expect(false).to.be.true;
    });
  });
}

for (let x = 0; x < 10; x++) {
  it("should not run slow", () => {
    for (let i = 0; i < 5; i++) {
      if (i === 0) {
        cy.visit("page1.html");
      } else {
        cy.contains("a", `Page ${i + 1}`).click();
      }

      cy.get("input").type("foo bar");
    }
  });
}
