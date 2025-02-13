import { PROTECTED_ROUTES, ROUTES } from "../constants";

export const pathHelpers = {
  isProtectedRoute(path: string) {
    return (
      PROTECTED_ROUTES.includes(path) ||
      this.isOtherUserProfile(path) ||
      this.isPostPath(path)
    );
  },
  isCurrentUserProfile: (path: string) => {
    const regex = new RegExp(`^${ROUTES.PROFILE}$`);
    return regex.test(path);
  },

  isOtherUserProfile: (path: string) => {
    const regex = new RegExp(`^${ROUTES.PROFILE}\/[a-zA-Z0-9_-]+$`);
    return regex.test(path);
  },

  isPostPath: (path: string) => {
    const regex = new RegExp(`^${ROUTES.POSTS}\/[a-zA-Z0-9_-]+$`);
    return regex.test(path);
  },

  getUsernameFromPath: (path: string) => {
    const regex = new RegExp(`^${ROUTES.PROFILE}\/([a-zA-Z0-9_-]+)$`);
    const match = path.match(regex);
    return match ? match[1] : null;
  },

  getPostIdFromPath: (path: string) => {
    const regex = new RegExp(`^${ROUTES.POSTS}\/([a-zA-Z0-9_-]+)$`);
    const match = path.match(regex);
    return match ? match[1] : null;
  },
};
