import { ROUTES } from "../../src/shared/constants";

describe("Login tests", () => {
  it(`Should redirect to entry when logout successfull`, () => {
    cy.login();
    cy.logout();

    cy.url().should("include", ROUTES.ENTRY);
  });
});
