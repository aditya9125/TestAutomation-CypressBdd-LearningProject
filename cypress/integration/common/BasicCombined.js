import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('I open homepage', function(){
    
    cy.visit("www.gio.com.au")
})

When('I click on faqsLink', function(){

    // cy.get('ul>li>a[href="faqs.html"]')
    
})