import styles from "./SkillsCardsContainer.module.scss";

import SkillCard from "../SkillCard/SkillCard";

import { skills } from "../../data";

const SkillsCardsContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Things I can do</h2>

      <div className={styles.container__cards}>
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsCardsContainer;
