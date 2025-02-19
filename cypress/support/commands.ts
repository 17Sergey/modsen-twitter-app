/// <reference types="cypress" />

import { DATA_CY, ROUTES, TESTS_URL } from "../../src/shared/constants";

export const TEST_USER = {
  username: "janedoe",
  password: "111111",
  fullName: "Jane Doe",
};

export const SIGNUP_USER = {
  fullName: "Test_user",
  username: "test_user",
  email: "test_user@gmail.com",
  password: "111111",
};

Cypress.Commands.add("login", () => {
  cy.visit(`${TESTS_URL}${ROUTES.LOGIN}`);

  cy.get(`[data-cy="${DATA_CY.LOGIN.USERNAME_OR_EMAIL}"]`).type(
    TEST_USER.username,
  );
  cy.get(`[data-cy="${DATA_CY.LOGIN.PASSWORD}"]`).type(TEST_USER.password);
  cy.get(`[data-cy="${DATA_CY.LOGIN.SUBMIT_BTN}"]`).click();

  cy.url().should("include", ROUTES.FEED);
});

Cypress.Commands.add("logout", () => {
  cy.get(`[data-cy="${DATA_CY.LOGOUT_BTN}"]`).click();

  cy.url().should("include", ROUTES.ENTRY);
});

Cypress.Commands.add("signup", () => {
  cy.visit(`${TESTS_URL}${ROUTES.SIGNUP}`);

  cy.get(`[data-cy="${DATA_CY.SIGNUP.NAME}"]`).type(SIGNUP_USER.fullName);
  cy.get(`[data-cy="${DATA_CY.SIGNUP.USERNAME}"]`).type(SIGNUP_USER.username);
  cy.get(`[data-cy="${DATA_CY.SIGNUP.EMAIL}"]`).type(SIGNUP_USER.email);
  cy.get(`[data-cy="${DATA_CY.SIGNUP.PASSWORD}"]`).type(SIGNUP_USER.password);
  cy.get(`[data-cy="${DATA_CY.SIGNUP.CONFIRM_PASSWORD}"]`).type(
    SIGNUP_USER.password,
  );

  cy.get(`[data-cy="${DATA_CY.SIGNUP.SUBMIT_BTN}"]`).click();

  cy.url().should("include", ROUTES.FEED);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      logout(): Chainable<void>;
      signup(): Chainable<void>;
    }
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

