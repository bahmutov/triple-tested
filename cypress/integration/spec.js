/// <reference types="cypress" />
describe('Triple tested', () => {
  it('has index and about pages', () => {
    cy.visit('/')
    cy.contains('h1', 'Main page')
    cy.contains('hope so!')
    cy.contains('a', 'about page').click()
    cy.url().should('match', /about/)
    cy.contains('h1', 'About')
    cy.contains('a', 'main page').click()
    cy.url().should('not.match', /about/)
  })
})
