import { FC, useState } from "react";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import TwitterLogo from "@/shared/assets/twitter.svg";
import BurgerMenuIcon from "@/shared/components/icons/BurgerMenuIcon";
import CloseIcon from "@/shared/components/icons/CloseIcon";
import { ROUTES } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../Sidebar/LogoutButton";
import SidebarItems from "../Sidebar/SidebarItems";
import SidebarUser from "../Sidebar/SidebarUser";
import TweetButton from "../Sidebar/TweetButton";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu: FC = () => {
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Link href={ROUTES.FEED}>
        <Image
          className={styles.twitterLogo}
          src={TwitterLogo}
          alt={"Twitter logo"}
          width={24}
          height={24}
        />
      </Link>
      <div>
        <button
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <div className={styles.burger}>
            <BurgerMenuIcon className={styles.burgerIcon} />
          </div>
        </button>
        {isMenuOpen && (
          <div className={styles.overlay} onClick={toggleMenu}></div>
        )}
        <div
          className={`${styles.burgerMenu} ${isMenuOpen && styles.burgerMenuOpen}`}
        >
          <button
            className={styles.closeButton}
            aria-expanded={!isMenuOpen}
            aria-controls="menu"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <div className={styles.close}>
              <CloseIcon className={styles.closeIcon} />
            </div>
          </button>
          <div className={styles.menuContent}>
            <SidebarItems />
            <TweetButton />
            <SidebarUser user={user as UserWithId} />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};
