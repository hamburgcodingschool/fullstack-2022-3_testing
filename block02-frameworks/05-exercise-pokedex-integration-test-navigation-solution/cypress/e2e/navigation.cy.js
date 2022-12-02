describe('navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('works as expected', () => {
    cy.get('button').contains("Pokedex").click();
    cy.get('.grid div').should('have.length.greaterThan', 3);

    cy.get('button').contains("Inbox").click();
    cy.get('article').should('have.text', 'Inbox');

    cy.get('button').contains("Home").click();
    cy.get('article').should('contain.text', 'Hello Visitor');
  })
})