import { ThemeProvider } from "next-themes";

import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <ThemeProvider>
      <main className={styles.mainContent}>
        <Sidebar />

        <section className={styles.mainContent__mainCard}>
          <Navbar />
          {children}
        </section>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
