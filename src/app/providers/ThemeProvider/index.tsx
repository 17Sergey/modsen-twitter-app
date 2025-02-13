"use client";

import { ThemeContext } from "@/app/providers/ThemeProvider/context";
import { THEME_NAMES } from "@/shared/constants";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const getItemFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const setItemToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

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
