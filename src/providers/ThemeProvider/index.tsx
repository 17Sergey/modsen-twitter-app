import { createContext, PropsWithChildren, useState } from "react";

// Theme names are declared in _themes.scss and need to match
export const THEME_NAMES = {
  LIGHT: "light",
  DARK: "dark",
};

interface ContextProps {
  themeName: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  themeName: THEME_NAMES.LIGHT,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState(THEME_NAMES.LIGHT);

  const toggleThemeHandler = () => {
    setThemeName(
      themeName === THEME_NAMES.LIGHT ? THEME_NAMES.DARK : THEME_NAMES.LIGHT,
    );
  };

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
