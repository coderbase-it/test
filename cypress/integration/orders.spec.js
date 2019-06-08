/// <reference types="Cypress" />
describe("Orders", ()=> {

  beforeEach(() => {
    cy.visit('/orders')
  })

  it('should load when order page is reach', () => {
    // https://on.cypress.io/window
    cy.get("app-orders").should('have.length.greaterThan', 1)
  })


})
