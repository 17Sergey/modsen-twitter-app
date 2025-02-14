"use client";

import { ThemeContext } from "@/app/providers/ThemeProvider/context";
import { THEME_NAMES } from "@/shared/constants";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const item = window?.localStorage.getItem("theme");
    return item ? JSON.parse(item) : THEME_NAMES.LIGHT;
  });

  const toggleThemeHandler = () => {
    const newTheme =
      themeName === THEME_NAMES.LIGHT ? THEME_NAMES.DARK : THEME_NAMES.LIGHT;

    setThemeName(newTheme);
    window?.localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
    window?.localStorage.setItem("theme", JSON.stringify(themeName));
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
