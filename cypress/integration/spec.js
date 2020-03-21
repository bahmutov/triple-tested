/// <reference types="cypress" />
describe('Triple tested', () => {
  it('shows index page', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello VuePress')
  })
})
