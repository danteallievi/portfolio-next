import type { NextPage } from "next";

import styles from "../../styles/components/SkillCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
  title: string;
  subtitle: string;
}

const SkillCard: NextPage<Props> = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.card_content}>
        <h1 className={styles.card__title}>{title}</h1>
        <p className={styles.card__subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SkillCard;
