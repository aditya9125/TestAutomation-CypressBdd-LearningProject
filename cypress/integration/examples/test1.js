const { default: HomePage } = require("./PageObjects/homePage")

describe('Home page', function(){

    it('My first test case', function(){
        
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        homePage.getNameBox().type('Aditya')        
    })

    it.skip('My second test case', function(){
        //..X..Wrong 
        const logoElement = cy.get('brand-logo')
        cy.log(logoElement.text())

        //..Correct
        cy.get('.brand-logo')
        .then(function(logoElement)
        {
            cy.log(logoElement.text())

        })
    })

    it.skip('Check wheter the title displayed is correct or not', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.brand').should('have.text','GREENKART')
    })

})