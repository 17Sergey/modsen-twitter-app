import { DATA_CY, ROUTES, TESTS_URL } from "../../src/shared/constants";

describe("Add posts tests", () => {
  it(`Should add posts to posts list`, () => {
    cy.login();

    cy.visit(`${TESTS_URL}${ROUTES.PROFILE}`);

    const postMessage = `My post ${Date.now()}`;

    cy.get(`[data-cy="${DATA_CY.PROFILE.ADD_POST.TEXTAREA_TEST_ID}"]`).type(
      postMessage,
    );

    cy.get(`[data-cy="${DATA_CY.PROFILE.ADD_POST.ADD_BTN}"]`).click();

    cy.get(`[data-cy="${DATA_CY.PROFILE.POSTS_LIST}"]`).should(
      "contain",
      postMessage,
    );
  });
});
