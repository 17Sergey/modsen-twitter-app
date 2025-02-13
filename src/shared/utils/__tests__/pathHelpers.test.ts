import { PROTECTED_ROUTES, ROUTES } from "@/shared/constants";
import { pathHelpers } from "../pathHelpers";

describe("pathHelpers", () => {
  describe("isProtectedRoute", () => {
    it("should return true for a protected route", () => {
      const protectedPath = PROTECTED_ROUTES[0]; // Предполагается, что в PROTECTED_ROUTES есть хотя бы один элемент
      expect(pathHelpers.isProtectedRoute(protectedPath)).toBe(true);
    });

    it("should return true for current user profile route", () => {
      const currentUserProfilePath = ROUTES.PROFILE;
      expect(pathHelpers.isProtectedRoute(currentUserProfilePath)).toBe(true);
    });

    it("should return true for other user profile route", () => {
      const otherUserProfilePath = `${ROUTES.PROFILE}/john_doe`;
      expect(pathHelpers.isProtectedRoute(otherUserProfilePath)).toBe(true);
    });

    it("should return true for post path", () => {
      const postPath = `${ROUTES.POSTS}/12345`;
      expect(pathHelpers.isProtectedRoute(postPath)).toBe(true);
    });

    it("should return false for non-protected route", () => {
      const nonProtectedPath = "/public";
      expect(pathHelpers.isProtectedRoute(nonProtectedPath)).toBe(false);
    });
  });

  describe("isCurrentUserProfile", () => {
    it("should return true for the current user profile path", () => {
      expect(pathHelpers.isCurrentUserProfile(ROUTES.PROFILE)).toBe(true);
    });

    it("should return false for other paths", () => {
      expect(
        pathHelpers.isCurrentUserProfile(`${ROUTES.PROFILE}/john_doe`),
      ).toBe(false);
    });
  });

  describe("isOtherUserProfile", () => {
    it("should return true for other user profile paths", () => {
      expect(pathHelpers.isOtherUserProfile(`${ROUTES.PROFILE}/john_doe`)).toBe(
        true,
      );
    });

    it("should return false for current user profile path", () => {
      expect(pathHelpers.isOtherUserProfile(ROUTES.PROFILE)).toBe(false);
    });
  });

  describe("isPostPath", () => {
    it("should return true for post paths", () => {
      expect(pathHelpers.isPostPath(`${ROUTES.POSTS}/12345`)).toBe(true);
    });

    it("should return false for non-post paths", () => {
      expect(pathHelpers.isPostPath(ROUTES.PROFILE)).toBe(false);
    });
  });

  describe("getUsernameFromPath", () => {
    it("should extract username from user profile path", () => {
      expect(
        pathHelpers.getUsernameFromPath(`${ROUTES.PROFILE}/john_doe`),
      ).toBe("john_doe");
    });

    it("should return null for non-user profile path", () => {
      expect(pathHelpers.getUsernameFromPath(`${ROUTES.POSTS}/12345`)).toBe(
        null,
      );
    });
  });

  describe("getPostIdFromPath", () => {
    it("should extract post ID from post path", () => {
      expect(pathHelpers.getPostIdFromPath(`${ROUTES.POSTS}/12345`)).toBe(
        "12345",
      );
    });

    it("should return null for non-post path", () => {
      expect(pathHelpers.getPostIdFromPath(ROUTES.PROFILE)).toBe(null);
    });
  });
});
