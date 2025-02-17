import { ROUTES } from "../../src/shared/constants";

describe("Login tests", () => {
  it(`Should redirect to feed when login successfull`, () => {
    cy.login();

    cy.url().should("include", ROUTES.FEED);
  });
});
