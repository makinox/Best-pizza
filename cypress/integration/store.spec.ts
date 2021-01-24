/// <reference types="cypress" />

export default context('Store', () => {
  it('Its store page', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.login();
    cy.location('pathname').should('include', '/tiendas');
  });

  describe('Layout', () => {
    it('Store should have a preview pizza image', () => {
      cy.get('[data-cy="preview-image"]').should('be.visible').should('have.length', 1);
    });

    it('Store should have a page container', () => {
      cy.get('[data-cy="page-container"]').should('be.visible').should('have.length', 1);
    });

    it('Store should have a header', () => {
      cy.get('[data-cy="page-header"]').should('be.visible').should('have.length', 1);
    });

    it('Store should have a page tree', () => {
      cy.get('[data-cy="page-tree"]').should('be.visible').should('have.length', 1);
    });

    it('Store should have a title', () => {
      cy.get('[data-cy="page-titles"] h2').should('be.visible').should('have.length', 1);
    });

    it('Store should have a subtitle', () => {
      cy.get('[data-cy="page-titles"] p:first').should('be.visible').should('have.length', 1);
    });

    it('Store should have a direction', () => {
      cy.get('[data-cy="page-titles"] p:last').should('be.visible').should('have.length', 1);
    });

    it('Store should have a card container', () => {
      cy.get('[data-cy="card-container"]').should('be.visible').should('have.length', 1);
    });

    it('Store should have more than 0 store', () => {
      cy.get('[data-cy="card-container"] > article').should('have.length.greaterThan', 0);
    });

    it('Store should have a footer', () => {
      cy.get('[data-cy="footer"]').should('be.visible').should('have.length', 1);
    });
  });

  describe('Actions', () => {
    it('Store should redirect if user clicks in pizzerias label', () => {
      cy.get('[data-cy="page-tree"] > span:first').click();
      cy.location('pathname').should('include', '/tiendas');
    });
  });
});
