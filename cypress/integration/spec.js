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
    // only our Main page has <h1>Main page</h1>
    cy.contains('h1', 'Main page')
  })

  it.skip('finds About page using built-in search', () => {
    cy.visit('/')
    cy.get('.search-box input').type('about')
    // suggestions list appears
    cy.get('.suggestions li').should('be.visible')
      // and should have at least 1 item
      .and('have.length.gte', 1)
      // and the first search result is our "About" page
      .first()
      .contains('.page-title', 'About').click()
    // check we are on the right page
    cy.title().should('contain', 'About')
  })

  it('finds About page using Algolia search widget', () => {
    cy.visit('/')
    cy.get('.search-box input').type('about')
    // suggestions list appears
    cy.contains('.algolia-docsearch-suggestion--title', 'About').should('be.visible')
      .click()
    // check we are on the right page
    cy.title().should('contain', 'About')
  })
})
