describe('initial state', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('can add new todos',  () => {
    cy.get('#new-todo-input').type('Play{enter}');

    cy.get('.todo').should('have.length', 4);
    cy.get('.todo:nth-child(4)').should('contain.text', 'Play');
  });

  it('can delete todos', () => {
    cy.get('.todo:nth-child(1)').within(() => {
      cy.get('.btn__danger').click();
    })

    cy.get('.todo').should('have.length', 2);
    cy.get('.todo:nth-child(1)').should('not.contain.text', 'Eat');
  });

  it('update a todo', () => {
    cy.get('.todo:nth-child(1)').within(() => {
      cy.get('.btn:nth-child(1)').click();
      cy.get('.todo-text').type(' and Drink{enter}');
    })

    cy.get('.todo:nth-child(1)').should('contain.text', 'Eat and Drink');
  });

})