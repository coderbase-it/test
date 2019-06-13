/// <reference types="Cypress" />

describe("Orders", () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/orders')
  })

  it('should load when order page is reach', () => {
    cy.get("app-list-orders").should('have.length.greaterThan', 0)
  })

  it('should load when order page is reach', () => {
    cy.get("app-list-orders").should('have.length.greaterThan', 0)
  })

  it('should load at least one order ', () => {
    cy.get("app-item-order").should('have.length.greaterThan', 1)
  })

  it('should have a button to go to add ', () => {
    cy.get("app-button-add").should('have.length.greaterThan', 0)
    cy.get("app-button-add").should('have.text', 'Add a order')
    cy.get("app-button-add").click()
    cy.url().should('contain', 'add')
  })

  it('should have select by order ', () => {
    cy.get("[data-cy=select]").should('have.length.greaterThan', 0)
    cy.get("[data-cy=select]").first().select('Cancel').then((select$) => {



        expect(select$.val()).eq('Cancel')
        expect(select$.parent().hasClass('state-cancel')).eq(true)
      //expect(select2$.get('option').text()).eq('Cancel')
    })
   /*  select = cy.get("app-item-order:first-child select")
    select.select('Confirm')
    select.should('have.value', 'Confirm')
    select.parent().should('have.class', 'state-confirm')
    select = cy.get("app-item-order:first-child select")
    select.select('Option')
    select.should('have.value', 'Option')
    select.parent().should('have.class', 'state-option') */

  })


  it('should have select with app-action button ', () => {
    action = cy.get("app-item-order:first-child app-action button")
    action.click()
    popover = cy.get("app-item-order:first-child app-action ngb-popover-window")
    popover.should('have.length.greaterThan', 0)
    icons = popover.get('.popover-body ul li fa-icon')
    /* icons.each(element => {
      element.should('have.text', 'edit')
    }); */
  })









})
