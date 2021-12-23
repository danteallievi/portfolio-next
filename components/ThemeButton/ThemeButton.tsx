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
      localStorage.theme = "dark";
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkTheme(false);
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
      console.log(document.documentElement.classList);
    } else {
      setDarkTheme(true);
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      console.log(document.documentElement.classList);
    }
  };

  return (
    <>
      <button className={styles.themeButton} onClick={handleToggleTheme}>
        <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
        {darkTheme ? "Light" : "Dark"} mode
      </button>
    </>
  );
};

export default ThemeButton;
