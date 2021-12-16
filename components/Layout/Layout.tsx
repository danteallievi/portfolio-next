interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <main className="main-content">{children}</main>;
};

export default Layout;
