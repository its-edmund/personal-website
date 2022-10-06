import { useEffect } from "react";
import { useSticky } from "../hooks/useSticky";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { isSticky, sentinel } = useSticky();

  useEffect(() => {
    console.log(isSticky);
  }, [isSticky]);

  return (
    <>
      {sentinel}
      <Navbar isSticky={isSticky} />
      <main className="md:px-32 px-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
