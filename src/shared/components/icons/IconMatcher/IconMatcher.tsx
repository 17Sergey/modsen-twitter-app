import { ICONS } from "@/shared/constants";
import { FC } from "react";
import { LoaderIcon } from "../LoaderIcon";
import { BookmarksIcon } from "../sidebar/BookmarksIcon";
import { ExploreIcon } from "../sidebar/ExploreIcon";
import { HomeIcon } from "../sidebar/HomeIcon";
import { ListsIcon } from "../sidebar/ListsIcon";
import { MessagesIcon } from "../sidebar/MessagesIcon";
import { MoreIcon } from "../sidebar/MoreIcon";
import { NotificationsIcon } from "../sidebar/NotificationsIcon";
import { ProfileIcon } from "../sidebar/ProfileIcon";

type IconMatcherProps = {
  name: string;
  className?: string;
};

export const IconMatcher: FC<IconMatcherProps> = ({ name, className = "" }) => {
  switch (name) {
    case ICONS.LOADER:
      return <LoaderIcon className={className} />;
    case ICONS.HOME:
      return <HomeIcon className={className} />;
    case ICONS.EXPLORE:
      return <ExploreIcon className={className} />;
    case ICONS.NOTIFICATIONS:
      return <NotificationsIcon className={className} />;
    case ICONS.MESSAGES:
      return <MessagesIcon className={className} />;
    case ICONS.BOOKMARKS:
      return <BookmarksIcon className={className} />;
    case ICONS.LISTS:
      return <ListsIcon className={className} />;
    case ICONS.PROFILE:
      return <ProfileIcon className={className} />;
    case ICONS.MORE:
      return <MoreIcon className={className} />;
    default:
      return <HomeIcon className={className} />;
  }
};
