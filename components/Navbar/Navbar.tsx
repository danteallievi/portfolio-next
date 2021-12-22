import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../styles/components/Navbar/Navbar.module.scss";
import NavItem from "./NavLink";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") return setActive("About");
    if (pathname === "/projects") return setActive("Projects");
    if (pathname === "/resume") return setActive("Resume");
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <span className={styles.navbar__activePage}>{active}</span>
      <div className={styles.navbar__links}>
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
      </div>
    </nav>
  );
};

export default Navbar;
