import styles from "../../styles/components/Layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <main className={styles.mainContent}>
        <Sidebar />
        <section className={styles.mainContent__articleContent}>
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
