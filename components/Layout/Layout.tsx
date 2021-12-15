interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <div className="dark">{children}</div>;
};

export default Layout;
