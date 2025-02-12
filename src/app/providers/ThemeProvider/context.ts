"use client";

import { THEME_NAMES } from "@/shared/constants";
import { createContext } from "react";

interface ContextProps {
  themeName: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  themeName: THEME_NAMES.LIGHT,
  toggleTheme: () => {},
});
