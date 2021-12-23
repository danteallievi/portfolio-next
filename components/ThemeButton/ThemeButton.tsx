import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import styles from "../../styles/components/ThemeButton.module.scss";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const checkDarkTheme = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkTheme(true);
      setTheme("dark");
    } else {
      setIsDarkTheme(false);
      setTheme("light");
    }
  }, [setTheme]);

  useEffect(() => {
    checkDarkTheme();
  }, [checkDarkTheme]);

  const handleToggleTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setIsDarkTheme(false);
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setIsDarkTheme(true);
      setTheme("dark");
    }
  };

  return (
    <>
      <button className={styles.themeButton} onClick={handleToggleTheme}>
        <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
        {isDarkTheme ? "Light" : "Dark"} mode
      </button>
    </>
  );
};

export default ThemeButton;
