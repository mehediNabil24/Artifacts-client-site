import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <div>
      <section  className="  bg-[#356a91] mb-[100px]">
        <Header></Header>
      </section>
      <section className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
      <section className=" mt-5 mb-2">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Layout;
