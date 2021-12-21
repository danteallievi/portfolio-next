import { useEffect, useState } from "react";
import styles from "../../styles/components/ThemeButton.module.scss";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const checkDarkTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkTheme(true);
      console.log("dark theme trueee");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkTheme(false);
      console.log("dark theme falsee");
    }
  };

  useEffect(() => {
    checkDarkTheme();
  }, []);

  const handleToggleTheme = () => {
    if (darkTheme) {
      setDarkTheme(false);
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      setDarkTheme(true);
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <button className={styles.themeButton} onClick={handleToggleTheme}>
        <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
        {darkTheme ? "Light" : "Dark"} Mode
      </button>
    </>
  );
};

export default ThemeButton;
