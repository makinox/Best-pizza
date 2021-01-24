export default Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('BASE_URL'));
  cy.get('[data-cy="page-container"] form input:first').type(Cypress.env('BASE_TEST_USER'));
  cy.get('[data-cy="page-container"] form input:last').type(Cypress.env('BASE_TEST_PASSWORD'));
  cy.get('[data-cy="page-container"] form').submit();
});
