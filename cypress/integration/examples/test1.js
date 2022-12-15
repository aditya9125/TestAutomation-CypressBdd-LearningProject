describe('Home page', function(){

    it.skip('My first test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        .then(()=> {
            return cy.get('.awesome-selector')
        })
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

    it('Check wheter the title displayed is correct or not', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.brand').should('have.text','GREENKART')
    })


})