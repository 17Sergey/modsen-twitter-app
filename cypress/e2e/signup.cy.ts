import { ROUTES } from "../../src/shared/constants";

describe("Signup tests", () => {
  it(`Should redirect to feed when signup successfull`, () => {
    cy.signup();
  });
});
