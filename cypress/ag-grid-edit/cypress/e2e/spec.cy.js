for (let i = 0; i < 100; i++) {
  it('edit cell ' + i, () => {
    cy.visit('ag-example')
    cy.contains(".ag-cell", "Aleksey Nemov")
      .dblclick()
      .find("input")
      .type("LOL!")
      .blur()
  })
}
