import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import styles from "../../styles/components/Navbar.module.scss";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSelectedPage(router.pathname);
  }, [router.pathname]);

  // const handleClick = (pathName: string) => {
  // const selectedPage = pathName;
  // };

  return (
    <ul className={styles.navbarList}>
      {selectedPage}
      {/* <button onClick={handleClick}>Clicl</button> */}
      <li
        className={
          router.pathname === "/resume"
            ? styles.navbarList__listItemActive
            : styles.navbarList__listItem
        }
      >
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </li>
      <li className={styles.navbarList__listItem}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className={styles.navbarList__listItem}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
