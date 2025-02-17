import { TEST_USER } from "cypress/support/commands";
import { DATA_CY, ROUTES, TESTS_URL } from "../../src/shared/constants";

describe("Search users tests", () => {
  it(`Should search users in Aside`, () => {
    cy.viewport(1400, 700);

    cy.login();

    cy.get(`[data-cy="${DATA_CY.ASIDE.USERS_SEARCH}"]`).type("j");

    cy.get(`[data-cy="${DATA_CY.ASIDE.USERS_LIST}"]`).should(
      "contain",
      "John Doe",
    );
  });
});
