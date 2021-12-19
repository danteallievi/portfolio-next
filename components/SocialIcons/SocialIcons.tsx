import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/SocialIcons.module.scss";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://github.com/danteallievi"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/dante-allievi"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:danteallievi@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default SocialIcons;
