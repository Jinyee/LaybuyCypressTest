// (https://sandbox-www.laybuy.com/nz/shop-here/)
/// <reference types="cypress" />

context('Visit Shop-here page', () => {
    beforeEach(() => {
      cy.visit('https://sandbox-www.laybuy.com/nz/shop-here/')
      cy.viewport('macbook-15')
      cy.contains('Accept').click()
    })

    it('Scroll to see input and enter keyword', () => {
      cy.wait(200)
      cy.get('input').scrollIntoView().should('be.visible')
      cy.get('input').focus().type('Stirling')
      cy.get('.tile-module--tile--1ZeJx').should('have.length', 2)
    })
  })
  