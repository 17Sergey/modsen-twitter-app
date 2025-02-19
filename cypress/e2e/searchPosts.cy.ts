import { DATA_CY, ROUTES, TESTS_URL } from "../../src/shared/constants";

describe("Search users tests", () => {
  it(`Should search users in Aside`, () => {
    cy.viewport(1400, 700);

    cy.login();

    cy.visit(`${TESTS_URL}${ROUTES.PROFILE}`);

    cy.get(`[data-cy="${DATA_CY.ASIDE.POSTS_SEARCH}"]`).type("h");

    cy.get(`[data-cy="${DATA_CY.ASIDE.POSTS_LIST}"]`).should(
      "contain",
      "hello",
    );
  });
});
