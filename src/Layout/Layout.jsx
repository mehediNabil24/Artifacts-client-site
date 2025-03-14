import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header (Navbar) */}
      <div className="mb-[100px]">
        <Header />
      </div>

      {/* ✅ If it's the Home page, no mx-auto for Banner */}
      <main className={`${isHomePage ? "" : "w-11/12 mx-auto"} flex-1`}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
