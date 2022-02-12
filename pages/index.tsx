import type { NextPage } from "next";
import Head from "next/head";
import SkillsCardsContainer from "../components/SkillsCardsContainer/SkillsCardsContainer";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dante Allievi - About</title>
      </Head>
      <article className={styles.content}>
        <h1 className={styles.content__title}>
          I am from Buenos Aires, Argentina. Proactive and motivated, wanting to
          grow in the world of development and as a person. I have 2+ years of
          experience in Web Development and I&apos;m a huge fan of JavaScript
          and its frameworks.
        </h1>
        <SkillsCardsContainer />
      </article>
    </>
  );
};

export default Home;
