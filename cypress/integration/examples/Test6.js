///<reference types="Cypress" />
// Fixtures

//NOTE : '@cypress/xpath' is used here which is imported in 'support/e2e.js" file

//var dataValues="oldramesh"
//console.log(dataValues)

describe('Using Fixtures in the scenario', function(){

    before(function(){

        cy.fixture('DataSet1').then(function(data){
            //NOte - cy.fixture goes into the "fixtures" folder and the data values are returned into parameter "data" 
            
            //as above "data" parameter has scope till this block only and cannot be used in further "it" blocks..so..
            //lets declare a global "dataValues" variable and assign "data" to it
            this.dataValues= data
            //'this' keyword makes it available to this whole file 

        })
    })

    it('My first test', function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.xpath('(//input[@name="name"])[1]').type(this.dataValues.name)
    })
})