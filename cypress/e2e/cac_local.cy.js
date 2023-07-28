// 1. Test suite to verify the basic elements and actions of homepage
describe('Costumer Service Central', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    
    it('verify the title of the opened page', () => {
      cy.title()
        .should('not.be.empty')
        .should('include', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('verify the typing of the First Name input', () => {
      cy.get('#firstName')
        .should('be.visible')
        .type('John')
        .should('have.value', 'John')
    })
    
    it('verify the typing of the Last Name input', () => {
      cy.get('#lastName')
        .should('be.visible')
        .type('Doe')
        .should('have.value', 'Doe')
    })

    it('verify the typing of the Email input', () => {
			cy.get('#email')
					.should('be.visible')
					.type('john.doe@doe.com')
					.should('have.value', 'john.doe@doe.com')
		})

		it('verify the typing of the Phone input', () => {
			cy.get('#phone')
					.should('be.visible')
					.type('11999999999')
					.should('have.value', '11999999999')
		})

		it('verify the typing of the Product input', () => {
			cy.get('select#product')
					.should('be.visible')
					.select('Cursos')
					.should('have.value', 'cursos')
		})

  })