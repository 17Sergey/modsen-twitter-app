import { TEST_USER } from "cypress/support/commands";
import { DATA_CY, ROUTES, TESTS_URL } from "../../src/shared/constants";

describe("Profile tests", () => {
  it(`Should display user info`, () => {
    cy.login();

    cy.visit(`${TESTS_URL}${ROUTES.PROFILE}`);

    cy.get(`[data-cy="${DATA_CY.PROFILE.FULLNAME}"]`).should(
      "contain",
      TEST_USER.fullName,
    );

    cy.get(`[data-cy="${DATA_CY.PROFILE.USERNAME}"]`).should(
      "contain",
      TEST_USER.username,
    );
  });
});
