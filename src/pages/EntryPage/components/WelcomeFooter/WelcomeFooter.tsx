"use client";

import { ROUTES } from "@/shared/constants/constants";
import Link from "next/link";
import styles from "./WelcomeFooter.module.scss";

const LINKS = [
  { title: "About", href: ROUTES.ENTRY },
  { title: "Help Center", href: ROUTES.ENTRY },
  { title: "Terms of Service", href: ROUTES.ENTRY },
  { title: "Privacy Policy", href: ROUTES.ENTRY },
  { title: "Cookie Policy", href: ROUTES.ENTRY },
  { title: "Ads info", href: ROUTES.ENTRY },
  { title: "Blog", href: ROUTES.ENTRY },
  { title: "Status", href: ROUTES.ENTRY },
  { title: "Careers", href: ROUTES.ENTRY },
  { title: "Brand Resources", href: ROUTES.ENTRY },
  { title: "Advertsing", href: ROUTES.ENTRY },
  { title: "Marketing", href: ROUTES.ENTRY },
  { title: "Twitter for Business", href: ROUTES.ENTRY },
  { title: "Developers", href: ROUTES.ENTRY },
  { title: "Directory", href: ROUTES.ENTRY },
  { title: "Settings", href: ROUTES.ENTRY },
];

export const WelcomeFooter = () => (
  <footer className={styles.links}>
    {LINKS.map(({ title, href }) => (
      <Link key={title} href={href} className={styles.linkItem}>
        {title}
      </Link>
    ))}
    <p className={styles.linkItem}>© 2025 Twitter, Inc.</p>
  </footer>
);
