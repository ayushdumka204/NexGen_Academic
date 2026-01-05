import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallNow from "./Callnow";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      {/* 🔥 CALL NOW – visible on every page */}
      <CallNow />
    </>
  );
};

export default Layout;
// end
