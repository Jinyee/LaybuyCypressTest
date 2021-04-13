// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('EnterKeywordAndSearch',(keyword)=>{
    cy.get('input').scrollIntoView().should('be.visible')
    cy.get('input').focus().type(keyword)
})

Cypress.Commands.add('AssertUrlContains',(keyword)=>{
    cy.url().should('include', keyword)
})

Cypress.Commands.add('AssertDirectoryTiles', (elements, count) =>{
    cy.get(elements).should('have.length', count).and('have.attr','href') 
    cy.get(elements).each(($element) =>{
       expect($element).to.have.attr('target', '_blank')
       cy.get($element).then(Link =>{cy.request(Link.prop('href')).its('status').should('eq',200)})
    })
})