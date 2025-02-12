import bookmarksIcon from "@/shared/assets/sidebar/bookmarks.svg";
import exploreIcon from "@/shared/assets/sidebar/explore.svg";
import homeIcon from "@/shared/assets/sidebar/home.svg";
import listsIcon from "@/shared/assets/sidebar/lists.svg";
import messagesIcon from "@/shared/assets/sidebar/messages.svg";
import moreIcon from "@/shared/assets/sidebar/more.svg";
import notificationsIcon from "@/shared/assets/sidebar/notifications.svg";
import profileIcon from "@/shared/assets/sidebar/profile.svg";
import { ROUTES } from "@/shared/constants";

export const SIDEBAR_ITEMS = [
  { label: "Home", icon: homeIcon, route: ROUTES.FEED },
  { label: "Explore", icon: exploreIcon, route: ROUTES.EXPLORE },
  {
    label: "Notifications",
    icon: notificationsIcon,
    route: ROUTES.NOTIFICATIONS,
  },
  { label: "Messages", icon: messagesIcon, route: ROUTES.MESSAGES },
  { label: "Bookmarks", icon: bookmarksIcon, route: ROUTES.BOOKMARKS },
  { label: "Lists", icon: listsIcon, route: ROUTES.LISTS },
  { label: "Profile", icon: profileIcon, route: ROUTES.PROFILE },
  { label: "More", icon: moreIcon, route: ROUTES.MORE },
];
