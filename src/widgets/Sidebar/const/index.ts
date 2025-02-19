import { ICONS, ROUTES } from "@/shared/constants";

export const SIDEBAR_ITEMS = [
  { label: "Home", icon: ICONS.HOME, route: ROUTES.FEED },
  { label: "Explore", icon: ICONS.EXPLORE, route: ROUTES.EXPLORE },
  {
    label: "Notifications",
    icon: ICONS.NOTIFICATIONS,
    route: ROUTES.NOTIFICATIONS,
  },
  { label: "Messages", icon: ICONS.MESSAGES, route: ROUTES.MESSAGES },
  { label: "Bookmarks", icon: ICONS.BOOKMARKS, route: ROUTES.BOOKMARKS },
  { label: "Lists", icon: ICONS.LISTS, route: ROUTES.LISTS },
  { label: "Profile", icon: ICONS.PROFILE, route: ROUTES.PROFILE },
  { label: "More", icon: ICONS.MORE, route: ROUTES.MORE },
];
