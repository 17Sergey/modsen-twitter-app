"use client";

import { ThemeContext } from "@/app/providers/ThemeProvider/context";
import { THEME_NAMES } from "@/shared/constants";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "@/shared/utils/localStorageUtils";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return getItemFromLocalStorage("theme") || THEME_NAMES.LIGHT;
  });

  const toggleThemeHandler = () => {
    const newTheme =
      themeName === THEME_NAMES.LIGHT ? THEME_NAMES.DARK : THEME_NAMES.LIGHT;

    setThemeName(newTheme);
    setItemToLocalStorage("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
    setItemToLocalStorage("theme", themeName);
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
