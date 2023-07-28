// 1. Test suite to verify the basic elements and actions of homepage
describe('Costumer Service Central', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  }),
  it('verify the title of the opened page', () => {
    cy.get('body div.container h1').should('contain', 'Kitchen Sink')
  }),
  it('verify render of first link`s click', () => {
    cy.get('body > div.container a').first().click()
    cy.url().should('include', '/querying')
  }),
  it('visit local site', () =>  {
    cy.visit('./src/index.html')
    cy.title().should('include', 'CAC TAT')
  })
})

