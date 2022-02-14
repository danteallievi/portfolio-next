import type { NextPage } from "next";
import Head from "next/head";
import SkillsCardsContainer from "../components/SkillsCardsContainer/SkillsCardsContainer";
import { aboutText } from "../data";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dante Allievi - About</title>
      </Head>
      <article className={styles.content}>
        <h1 className={styles.content__title}>{aboutText}</h1>
        <SkillsCardsContainer />
      </article>
    </>
  );
};

export default Home;
