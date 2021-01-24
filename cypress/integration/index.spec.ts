/// <reference types="cypress" />

export default context('Login', () => {
  it('Its login page', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.location('pathname').should('include', '/');
  });

  describe('Layout', () => {
    it('Login should have a preview pizza image', () => {
      cy.get('[data-cy="preview-image"]').should('be.visible').should('have.length', 1);
    });

    it('Login should have a page container', () => {
      cy.get('[data-cy="page-container"]').should('be.visible').should('have.length', 1);
    });

    it('Login should have a form', () => {
      cy.get('[data-cy="page-container"] form').should('be.visible').should('have.length', 1);
    });
  });

  describe('Actions', () => {
    it('Login will respond with an error message if user type bad credentials', () => {
      cy.get('[data-cy="page-container"] form input:first').type('Worng');
      cy.get('[data-cy="page-container"] form input:last').type('credentials');
      cy.on('window:alert', txt => {
        expect(txt).to.contains('Wrong credentials');
      });
    });

    it('Login should redirect if user type correct credentials', () => {
      cy.login();
      cy.location('pathname').should('include', 'tiendas');
    });

    it('Log out button should log out user account', () => {
      cy.get('[data-cy="page-header"] div').click();
      cy.location('pathname').should('include', '');
    });
  });
});
