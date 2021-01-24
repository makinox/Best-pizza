/// <reference types="cypress" />

export default context('Stores', () => {
  it('Its stores page', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.login();
    cy.location('pathname').should('include', '/tiendas');
  });

  describe('Layout', () => {
    it('Stores should have a preview pizza image', () => {
      cy.get('[data-cy="preview-image"]').should('be.visible').should('have.length', 1);
    });

    it('Stores should have a page container', () => {
      cy.get('[data-cy="page-container"]').should('be.visible').should('have.length', 1);
    });

    it('Stores should have a header', () => {
      cy.get('[data-cy="page-header"]').should('be.visible').should('have.length', 1);
    });

    it('Stores should have a page tree', () => {
      cy.get('[data-cy="page-header"]').should('be.visible').should('have.length', 1);
    });

    it('Stores should have a title', () => {
      cy.get('[data-cy="page-titles"] h2').should('be.visible').should('have.length', 1);
    });

    it('Stores should have a subtitle', () => {
      cy.get('[data-cy="page-titles"] p').should('be.visible').should('have.length', 1);
    });

    it('Stores should have a card container', () => {
      cy.get('[data-cy="card-container"]').should('be.visible').should('have.length', 1);
    });

    it('Stores should have more than 0 stores', () => {
      cy.get('[data-cy="card-container"] > article').should('have.length.greaterThan', 0);
    });

    it('Stores should have a footer', () => {
      cy.get('[data-cy="footer"]').should('be.visible').should('have.length', 1);
    });
  });

  describe('Actions', () => {
    it('Stores should redirect if user clicks in one store', () => {
      cy.get('[data-cy="card-container"] > article:first').click();
      cy.location('pathname').should('include', '/tienda/');
    });
  });
});
