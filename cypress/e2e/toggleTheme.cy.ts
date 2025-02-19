import { DATA_CY, ROUTES } from "../../src/shared/constants";

describe("CSS Theme tests", () => {
  it(`Should change theme when toggling the button`, () => {
    cy.login();

    cy.get("body").then(($body) => {
      const initialColor = $body.css("background-color");

      cy.get(`[data-cy="${DATA_CY.TOGGLE_THEME}"]`).click({ multiple: true });

      cy.get("body").should(($newBody) => {
        const newColor = $newBody.css("background-color");
        expect(newColor).to.not.equal(initialColor);
      });
    });
  });
});
