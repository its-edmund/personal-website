import { useEffect } from "react";
import { useSticky } from "../hooks/useSticky";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { isSticky, sentinel } = useSticky();

  useEffect(() => {
    console.log(isSticky);
  }, [isSticky]);

  return (
    <>
      {sentinel}
      <Navbar isSticky={isSticky} />
      <main className="px-32">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
