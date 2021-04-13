//As a customer if i search for "Stirling" at (https://sandbox-www.laybuy.com/nz/shop-here/) 
//I'd expect to see at least 2 shop directory tiles, 
//if I click on any of the tiles, 
//a new window should open with the merchant's correct website

/// <reference types="cypress" />

context('Visit Shop-here Page and Accept Cookies', () => {
    beforeEach(() => {
      cy.visit('https://sandbox-www.laybuy.com/nz/shop-here/')
      //Take port view for macbook - 15 as an example
      cy.viewport('macbook-15')
      //Accept cookies
      cy.contains('Accept').click()
    })

    it('Scroll to see Input and Enter keyword', () => {
     
      cy.get('div[class="shop-directory-module--tiles--33tJj"]>a[class="tile-module--tile--1ZeJx"]')
      .as('directoryTiles')

      cy.EnterKeywordAndSearch('Stirling')
      cy.AssertUrlContains('searchText=Stirling&order=Bestsellers')

      cy.AssertDirectoryTiles('@directoryTiles',2)
    })

  })
  