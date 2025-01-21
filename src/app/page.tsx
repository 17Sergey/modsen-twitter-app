"use client";

import ThemeProvider, { ThemeContext } from "@/providers/ThemeProvider";
import SignUpForm from "@/widgets/SignUpForm/SignUpForm";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeProvider>
        <Content />
        <SignUpForm />
      </ThemeProvider>
    </div>
  );
}

function Content() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
  }, [themeName]);

  return (
    <div className={styles.container}>
      <h2>Welcome to the app</h2>
      <button className={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Link href={"/products"}>Products</Link>
      <Image src={"/close.svg"} alt={"Close"} width={24} height={24} />
      <Image src={"/close.svg"} alt={"Close"} width={24} height={24} />
    </div>
  );
}
