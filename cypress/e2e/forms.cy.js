describe('form tests',() =>{
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)

        // cy.get('[data-test="subscribe-form"]').find('input').type('ravi.com')
        // alias
        cy.get('[data-test="subscribe-form"]').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('ravi.com')

        // ravi.com subscribe
        cy.contains(/Successfully subbed: ravi.com!/i).should('not.exist')
        cy.get('[data-test="subscribe-button"]').click()
        cy.contains(/Successfully subbed: ravi.com!/i).should('exist')

        // wait
        cy.wait(3000)
        cy.contains(/Successfully subbed: ravi.com!/i).should('not.exist')

        // ravi.in subscribe
        cy.get('@subscribe-input').type('ravi.in')
        cy.get('[data-test="subscribe-button"]').click()
        cy.contains(/Invalid email: ravi.in!/i).should('exist')

        // empty subscribe
        cy.wait(3000)
        cy.get('[data-test="subscribe-button"]').click()
        cy.contains(/Invalid email: !/i).should('exist')
    })
})