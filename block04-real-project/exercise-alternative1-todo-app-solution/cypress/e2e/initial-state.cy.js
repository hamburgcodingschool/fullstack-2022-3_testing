describe('initial state', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has todos for Eat, Sleep and Repeat', () => {
    cy.get('.todo').should('have.length', 3);

    cy.get('.todo:nth-child(1)').should('contain.text', 'Eat');
    cy.get('.todo:nth-child(2)').should('contain.text', 'Sleep');
    cy.get('.todo:nth-child(3)').should('contain.text', 'Repeat');
  })

  it('shows the correct number of todos message', () => {
    cy.get('#list-heading').should('contain.text', '3 tasks remaining');
  })

  it('has a completed Eat todo', () => {
    cy.get('.todo:nth-child(1)').within(() => {
      cy.get('input[type="checkbox"]').should('be.checked');
    })
  })
})