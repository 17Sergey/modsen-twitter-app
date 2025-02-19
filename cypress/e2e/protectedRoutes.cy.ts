import {
  ROUTES,
  PROTECTED_ROUTES,
  TESTS_URL,
} from "../../src/shared/constants";

describe("Protected Routes Security", () => {
  beforeEach(() => {
    cy.clearCookie("token");
  });

  PROTECTED_ROUTES.forEach((route) => {
    it(`Should redirect to login when accessing ${route} without authentication`, () => {
      cy.visit(`${TESTS_URL}${route}`);
      cy.url().should("include", ROUTES.ENTRY);
    });
  });
});
