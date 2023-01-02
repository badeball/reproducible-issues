import bcrypt from "bcryptjs";

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("a", "root").click();
    cy.get("*").filter(() => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync("B4c0//", salt);
      console.log(hash);
    })
  })
})