import {
  ROUTES,
  PROTECTED_ROUTES,
  PORT_FOR_E2E_TESTS,
} from "../../src/shared/constants";

describe("Protected Routes Security", () => {
  beforeEach(() => {
    cy.clearCookie("token");
  });

  PROTECTED_ROUTES.forEach((route) => {
    it(`Should redirect to login when accessing ${route} without authentication`, () => {
      cy.visit(`http://localhost:${PORT_FOR_E2E_TESTS}${route}`);
      cy.url().should("include", ROUTES.ENTRY);
    });
  });
});
