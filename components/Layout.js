import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Stomatologia Orto Implant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar className="relative" />
      </div>
      <>
        <div className="relative z-0">{children}</div>
      </>
    </>
  );
};

export default Layout;
