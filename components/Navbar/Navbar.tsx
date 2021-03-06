import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";

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
        <NavLink active={active} setActive={setActive} name="About" route="/" />
        <NavLink
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
        <NavLink
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
