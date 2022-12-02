/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('pokedex', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays a list of pokemon', () => {
    cy.get('button').contains("Pokedex").click();
    cy.get('.grid div').should('have.length.greaterThan', 3);

    cy.get('.grid div h2').first().should('have.text', 'Bulbasaur'.toUpperCase());
  })
})
