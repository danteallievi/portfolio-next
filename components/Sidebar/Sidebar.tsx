import styles from "../../styles/components/Sidebar.module.scss";
import {
  faAddressBook,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "../SocialIcons/SocialIcons";
import ThemeButton from "../ThemeButton/ThemeButton";

const Sidebar = () => {
  return (
    <aside className={styles.sideCard}>
      <div className={styles.sideCard__title}>
        <h1 className={styles.sideCard__title__mainTitle}>
          <span>D</span>ante <span>A</span>llievi
        </h1>
        <p className={styles.sideCard__title__subTitle}>Web Developer</p>
      </div>

      <SocialIcons />

      <div className={styles.sideCard__resume}>
        <a
          href="/assets/DANTE-ALLIEVI-EN.pdf"
          download="DANTE-ALLIEVI-EN.pdf"
          className={styles.sideCard__resume__downloadLink}
        >
          <FontAwesomeIcon icon={faAddressBook} />
          <span>Download resume</span>
        </a>
      </div>

      <div className={styles.sideCard__data}>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>Barcelona, Spain</p>
        </div>
        <div className={styles.sideCard__data__mailSpan}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>danteallievi@gmail.com</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>+34 607 55 13 93</p>
        </div>
      </div>

      <ThemeButton />
    </aside>
  );
};

export default Sidebar;
