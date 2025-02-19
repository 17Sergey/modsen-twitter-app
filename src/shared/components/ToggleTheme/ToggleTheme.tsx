import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { DATA_CY, THEME_NAMES } from "@/shared/constants";
import styles from "./ToggleTheme.module.scss"; // Импортируйте SCSS модуль

export const ToggleTheme = () => {
  const { themeName, toggleTheme } = useTheme();
  const isDarkMode = themeName === THEME_NAMES.DARK;

  return (
    <button
      className={styles.button}
      role="switch"
      aria-checked={isDarkMode}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      data-cy={DATA_CY.TOGGLE_THEME}
      onClick={toggleTheme}
    >
      <div className={`${styles.ellipse}`}>
        <div
          className={`${styles.circle} ${isDarkMode ? styles.dark : styles.light}`}
        ></div>
      </div>
    </button>
  );
};
