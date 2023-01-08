after(() => {})

describe('empty spec', () => {
  describe('foo', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
    })
  })

  describe('bar', () => {
    it.skip('skipped')
  })
})