import styles from "../../styles/components/SkillCard/SkillCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISkillCard } from "../../interfaces/ISkillCard";

const SkillCard = ({ icon, title, subtitle }: ISkillCard) => {
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
