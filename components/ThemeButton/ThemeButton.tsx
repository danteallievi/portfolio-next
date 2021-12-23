import { useTheme } from "next-themes";
import styles from "../../styles/components/ThemeButton.module.scss";

// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // const IconToRender = () => {
  //   if (theme === "dark") {
  //     return;
  //   } else {
  //     return <FontAwesomeIcon icon={faMoon} />;
  //   }
  // };

  return (
    <>
      <button className={styles.themeButton} onClick={handleToggleTheme}>
        Sharau nekito
      </button>
    </>
  );
};

export default ThemeButton;
