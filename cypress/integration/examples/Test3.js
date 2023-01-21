/// <reference types="Cypress" />
// Handling Alerts, Confirm Popups

describe('My Second Test Suite', function() 
{
 
    it('My FirstTest case',function() {
    
        //Alert 
        cy.visit("http://qaclickacademy.com/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //window:alert | This triggers alert popup and handles it too | Catches the alert message into 'str' | Also clicks 'Ok'
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
         
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
         
        cy.get('#opentab').invoke('removeAttr','target').click()
         
        cy.url().should('include','qaclickacademy')
         
        cy.go('back')



     
    })
  
})