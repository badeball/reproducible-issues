beforeEach(() => {
  cy.env(["foo"], { log: false }).then(({ foo }) => {
    cy.log("env through cy.env: " + foo)
  });

  cy.log("env through Cypress.env: " + Cypress.env("foo"))

  cy.log("expose through Cypress.expose: " + Cypress.expose("foo"))
});

it("should work", { env: { foo: "foo" }, expose: { foo: "foo" }}, () => {})
