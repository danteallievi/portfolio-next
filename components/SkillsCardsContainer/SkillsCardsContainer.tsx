import { faServer } from "@fortawesome/free-solid-svg-icons";

import SkillCard from "../SkillCard/SkillCard";

import styles from "../../styles/components/SkillsCardsContainer/SkillsCardsContainer.module.scss";

const SkillsCardsContainer = () => {
  return (
    <div className={styles.container}>
      <SkillCard icon={faServer} title={"Hi"} subtitle={"hi"} />
    </div>
  );
};

export default SkillsCardsContainer;
