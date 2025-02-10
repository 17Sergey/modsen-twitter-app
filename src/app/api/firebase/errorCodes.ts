export const FIREBASE_ERROR_CODES = {
  POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
};

export const getUserFriendlyMessage = (code: string) => {
  switch (code) {
    case FIREBASE_ERROR_CODES.POPUP_CLOSED_BY_USER:
      return "Popup with Google was closed. Try again or use different auth method";
    default:
      return "Unknown error. Try later";
  }
};
