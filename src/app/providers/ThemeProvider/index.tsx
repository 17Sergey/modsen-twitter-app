"use client";

import { THEME_NAMES } from "@/shared/constants/constants";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  themeName: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  themeName: THEME_NAMES.LIGHT,
  toggleTheme: () => {},
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState(THEME_NAMES.LIGHT);

  const toggleThemeHandler = () => {
    setThemeName(
      themeName === THEME_NAMES.LIGHT ? THEME_NAMES.DARK : THEME_NAMES.LIGHT,
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
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
