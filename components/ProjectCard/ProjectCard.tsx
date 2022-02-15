import Image from "next/image";
import { IProjectCard } from "../../interfaces/interfaces";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ name, imagePath, onClick }: IProjectCard) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card__image}
        src={imagePath}
        alt={name}
        onClick={onClick}
        width={350}
        height={200}
      />
      <h2 className={styles.card__title}>{name}</h2>
    </div>
  );
};

export default ProjectCard;
