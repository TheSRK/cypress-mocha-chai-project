//const { describe } = require("mocha");

describe("Create post then mark umark as favortie", function(){
    it("Visit Sign-in URL", function(){
        cy.visit("https://react-redux.realworld.io/#/login?_k=utpys4")
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type=email]').type('shargo3554@gmail.com{enter}')
        cy.get('input[type=password]').type('123456{enter}')
        cy.get('.btn').contains('Sign in').should('be.visible').click()

        cy.contains('.nav-link','Global Feed', {timeout:10000}).should('be.visible')

    })

    it('Create a post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('this is title')
        cy.get('input[placeholder="What\'s this article about?"]').type('description test')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('test article')
        cy.get('input[placeholder="Enter tags"]').type('testOne')
        cy.contains('Publish Article').click();
        cy.url().should('include','article')
    })
   
})