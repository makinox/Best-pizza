// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  export interface Chainable {
    /**
     * Custom command to login
     * @example cy.login()
     */
    login(): Chainable<Element>;
  }
}
