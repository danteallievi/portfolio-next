import styles from "../../styles/components/Layout.module.scss";
import Navbar from "../Navbar/Navbar";
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
          <Navbar />
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
