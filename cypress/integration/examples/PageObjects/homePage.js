class HomePage
{
    getNameBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4)> .ng-untouched')
    }

    getGender()
    {
        cy.get('select');
    }
}
export default HomePage