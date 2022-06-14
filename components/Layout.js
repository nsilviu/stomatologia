import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <>{children}</>
    </>
  );
};

export default Layout;
