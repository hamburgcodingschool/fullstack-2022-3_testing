describe('pokedex', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000')
  });

  it('displays a list of pokemon', () => {
    cy.get("button").contains("Pokedex").click()
    cy.get('.grid div').should("have.length.greaterThan", 3)

    cy.get('.grid div h2').first().should('have.text', 'BULBASAUR');
    cy.get('.grid div img').first().should('have.attr', 'src').and('include', 'https://raw.githubusercontent.com/');;
  })
})