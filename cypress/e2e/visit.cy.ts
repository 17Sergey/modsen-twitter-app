import { TESTS_URL } from "@/shared/constants";

describe("Bank Page Tests", () => {
  it("visits correctly", () => {
    cy.visit(`${TESTS_URL}`);
  });
});
