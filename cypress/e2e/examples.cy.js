describe('Various examples', () =>{

    beforeEach(()=>{
        cy.visit('/examples')
    })

    it('multi-page testing', () => {

        // clicking on link and getting location
        cy.get('[data-test="nav-why-cypress"]').click()
        cy.location("pathname").should("equal","/")

        cy.get('[data-test="nav-examples"]').click()
        cy.location("pathname").should("equal","/examples")


    })


    // API Testing
    it('intercepts',() =>{
        cy.intercept("POST", 'http://localhost:3000/examples', {
            // body: {
            //     message: 'successfully intercepted request'
            // }

            fixture: 'example.json'
        })

        cy.get('[data-test="post-button"]').click()
    })

    // grudges
    it.only('grudges',()=>{

        cy.contains(/add some grudges/i)

        // clear button should not exist
        cy.get('[data-test="clear-button"]').should('not.exist')

        // Add some grudges TITLE display ho raha hai
        cy.get('[data-test="grudge-list-title"]').should('have.text', 'Add Some Grudges')

        // check grudge list 
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length',0)
        })

        // add grudge
        cy.get('[data-test="grudge-input"]').within(()=>{
            cy.get('input').type('some grudge')
        })
        cy.get('[data-test="add-grudge-button"]').click()

        // Add some grudges TITLE replace ho gaya Grudges se
        

        // check grudge list & check text
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length',1)
            cy.get('li').its(0).should('contains.text', 'some grudge')
        })

        // add grudge again
        cy.get('[data-test="grudge-input"]').within(()=>{
            cy.get('input').type('number 2')
        })
        cy.get('[data-test="add-grudge-button"]').click()

        // remove grudge
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').its(0).within(()=>{
                cy.get('button').click()
            })
        })

        // check grudge list
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length',1)
        })

        // click clear button
        cy.get('[data-test="clear-button"]').click()


    })
})