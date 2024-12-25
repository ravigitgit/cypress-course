describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  // only me sirf yahi chalega
  // it.only('Contains correct text', () => {
  it('Contains correct text', () => {
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
  })
})