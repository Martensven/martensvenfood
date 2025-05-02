describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://martensven.github.io/martensvenfood')
    cy.get('.recipeNav').click()
    cy.get('.ingredientNav').click()
    cy.get('.menuNav').click()
  })
})