describe('todo management', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('initial state', () => {
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
  
  it('should allow to add a task', () => {
    cy.get('.todo').should('have.length', 3);

    cy.get('#new-todo-input').type("test");
    cy.get('button').contains('Add').click();
    cy.get('.todo:last-child').contains('test');

    cy.get('.todo').should('have.length', 4);
  })

  it('allows to edit a task', () => {
    cy.get('.todo:first-child').within(() => {
      cy.get('button').contains('Edit').click();
      cy.get('.todo-text').should("have.value", "Eat");
      cy.get('.todo-text').type("test{enter}");
      cy.get('.todo-label').should("have.text", "Eattest");
    })
  })

  it('allows to delete a task', () => {
    cy.get('.todo').should('have.length', 3);
    cy.get('.todo:nth-child(1)').should('contain.text', 'Eat');

    cy.get('.todo:first-child').within(() => {
      cy.get('button').contains('Delete').click();
    })

    cy.get('.todo:nth-child(1)').should('not.contain.text', 'Eat');
    cy.get('.todo').should('have.length', 2);
  })

  describe('filtering', () => {
    it('allows to show completed tasks', () => {
      cy.get('button').contains('Completed').click();
      cy.get('.todo').should('have.length', 1);
      cy.get('.todo:nth-child(1)').should('contain.text', 'Eat');
    })

    it('allows to show active tasks', () => {
      cy.get('button').contains('Active').click();
      cy.get('.todo').should('have.length', 2);
      cy.get('.todo:nth-child(1)').should('contain.text', 'Sleep');
      cy.get('.todo:nth-child(2)').should('contain.text', 'Repeat');
    })

    it('allows to show all tasks', () => {
      cy.get('button').contains('Active').click();
      cy.get('button').contains('All').click();

      cy.get('.todo').should('have.length', 3);
  
      cy.get('.todo:nth-child(1)').should('contain.text', 'Eat');
      cy.get('.todo:nth-child(2)').should('contain.text', 'Sleep');
      cy.get('.todo:nth-child(3)').should('contain.text', 'Repeat');
    })

    it('changes filtered content in real-time', () => {
      cy.get('button').contains('Active').click();
      cy.get('.todo:nth-child(1)').should('contain.text', 'Sleep');

      cy.get('.todo:nth-child(1)').within(() => {
        cy.get('input[type="checkbox"]').should('not.be.checked');
        cy.get('input[type="checkbox"]').check();
      })

      cy.get('.todo').should('have.length', 1);
      cy.get('.todo:nth-child(1)').should('contain.text', 'Repeat');
    })
  })
});

