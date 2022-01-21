//const { describe, it } = require("mocha");

describe("Sign in", function(){
    it("Visit Sign-in URL", function(){
        cy.visit("https://react-redux.realworld.io/#/login?_k=utpys4")
        cy.get('input[type=email]').type('shargo3554@gmail.com{enter}')
        cy.get('input[type=password]').type('123456{enter}')
        cy.get('.btn').contains('Sign in').should('be.visible').click()

        cy.contains('.nav-link','Global Feed').should('be.visible')

    })

    it("Verify Dashboard is appeard", function(){
        cy.get('.nav-link').contains('Your Feed').should('be.visible')
        
    })
})