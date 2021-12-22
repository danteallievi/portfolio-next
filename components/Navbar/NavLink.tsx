import { FunctionComponent } from "react";
import Link from "next/link";

import styles from "../../styles/components/Navbar/NavLink.module.scss";

const NavLink: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span className={styles.navLink} onClick={() => setActive(name)}>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavLink;
