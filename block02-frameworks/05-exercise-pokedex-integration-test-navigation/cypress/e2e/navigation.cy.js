describe('navigation', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('renders working navigation items', () => {
    cy.get('button').contains('Inbox').click();
    cy.get('article').should('contain.text', "Inbox");
    
    cy.get('button').contains('Pokedex').click();
    cy.get('div').should('contain.text', "BULBASAUR");

    cy.get('button').contains('Home').click();
    cy.get('article').should('contain.text', "Hello Visitor");
  })
})