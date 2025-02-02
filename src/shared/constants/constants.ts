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

  EXPLORE: "/feed",
  NOTIFICATIONS: "/feed",
  MESSAGES: "/feed",
  BOOKMARKS: "/feed",
  LISTS: "/feed",
  MORE: "/feed",
};

export const PROTECTED_ROUTES = [ROUTES.FEED, ROUTES.PROFILE];

export const UNAUTHORIZED_ROUTES = [ROUTES.ENTRY, ROUTES.SIGNUP, ROUTES.LOGIN];

const API = "/api";
const AUTH = "/auth";
const generateAuthEndpoint = (endpoint: string) => `${API}${AUTH}${endpoint}`;

export const API_ROUTES = {
  GET_ME: generateAuthEndpoint("/me"),
  LOGOUT: generateAuthEndpoint("/logout"),
  SET_TOKEN: generateAuthEndpoint("/setToken"),
};

export const JWT_SECRET = process.env.JWT_SECRET || "";

export const QUERY_KEYS = {
  USER_AUTH: "getMe",
  USER_PROFILE: "userProfile",
  POSTS: "posts",
};
