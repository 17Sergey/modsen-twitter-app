// Theme names are declared in shared/styles/_themes.scss and need to match
export const THEME_NAMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const ROUTES = {
  ENTRY: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FEED: "/feed",
  PROFILE: "/profile",
};

export const PROTECTED_ROUTES = [ROUTES.FEED, ROUTES.PROFILE];
