///<reference types="cypress"/>

//Custom Commands in Cypress

describe('Using a custom command in the scenario', function(){

    before(function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')



    })

    it('TC01-Add to cart', function(){
    //Add an IphoneX to the cart 
        cy.xpath('//h4[@class="card-title"]').each(($ele, index, $list)=> {

            if($ele.text().includes('iphone X')){
                cy.xpath('//button[@class="btn btn-info"]').eq(index).click()
            }
        })
    })


})