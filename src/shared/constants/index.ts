/* NOTE: Theme names are declared in shared/styles/_themes.scss and need to match */
export const THEME_NAMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const BREAKPOINT_FOR_BURGER_MENU = 768; // Referebnces _breakpoints.scss in styles

export const ROUTES = {
  ENTRY: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FEED: "/feed",
  PROFILE: "/profile",
  POSTS: "/posts",

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
const IMAGES = "/images";

const generateAuthEndpoint = (endpoint: string) => `${API}${AUTH}${endpoint}`;
const generateImagesEndpoint = (endpoint: string) =>
  `${API}${IMAGES}${endpoint}`;

export const API_ROUTES = {
  GET_ME: generateAuthEndpoint("/me"),
  LOGOUT: generateAuthEndpoint("/logout"),
  SET_TOKEN: generateAuthEndpoint("/setToken"),
  UPLOAD_IMAGE: generateImagesEndpoint("/upload"),
  DESTROY_IMAGE: generateImagesEndpoint("/destroy"),
};

export const JWT_SECRET = process.env.JWT_SECRET || "";

export const QUERY_KEYS = {
  USER_AUTH: "getMe",
  USER_PROFILE: "userProfile",
  FEED_POSTS: "feed",
  POSTS: "posts",
  COMMENTS: "comments",

  SUGGESTED_USERS: "suggestedUsers",
  SUGGESTED_POSTS: "suggestedPosts",
  SEARCHED_USERS: "searchedUsers",
  SEARCHED_POSTS: "searchedPosts",
};

export const LOCAL_STORAGE_KEYS = {
  THEME: "theme",
};

export const ICONS = {
  HOME: "HOME",
  EXPLORE: "EXPLORE",
  NOTIFICATIONS: "NOTIFICATIONS",
  MESSAGES: "MESSAGES",
  BOOKMARKS: "BOOKMARKS",
  LISTS: "LISTS",
  PROFILE: "PROFILE",
  MORE: "MORE",

  LOADER: "LOADER",
};

export const TESTS_URL = "http://localhost:3000";

export const DATA_CY = {
  LOGIN_WITH_GOOGLE: "LOGIN_WITH_GOOGLE",
  LOGOUT_BTN: "LOGOUT_BTN",
  TOGGLE_THEME: "TOGGLE_THEME",
  LOGIN: {
    USERNAME_OR_EMAIL: "USERNAME_OR_EMAIL",
    PASSWORD: "PASSWORD",
    SUBMIT_BTN: "SUBMIT_BTN",
  },
  SIGNUP: {
    NAME: "NAME",
    USERNAME: "USERNAME",
    EMAIL: "EMAIL",
    PASSWORD: "PASSWORD",
    CONFIRM_PASSWORD: "CONFIRM_PASSWORD",
    SUBMIT_BTN: "SUBMIT_BTN",
  },
  PROFILE: {
    FULLNAME: "PROFILE_FULLNAME",
    USERNAME: "PROFILE_USERNAME",
    POSTS_LIST: "PROFILE_POSTS_LIST",
    ADD_POST: {
      TEXTAREA_TEST_ID: "TEXTAREA_TEST_ID",
      ADD_BTN: "ADD_BTN",
    },
  },
  ASIDE: {
    USERS_SEARCH: "USERS_SEARCH",
    POSTS_SEARCH: "POSTS_SEARCH",
    USERS_LIST: "USERS_LIST",
    POSTS_LIST: "POSTS_LIST",
  },
};
