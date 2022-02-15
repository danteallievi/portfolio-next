import styles from "../../styles/Projects.module.scss";

import Head from "next/head";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data";

const index = () => {
  return (
    <>
      <Head>
        <title>Dante Allievi - Projects</title>
      </Head>

      <div className={styles.projects_container}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
};

export default index;
