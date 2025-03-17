import React from "react";
import { Outlet } from "react-router";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
const Layout: React.FC = () => {
  return (
    <div className="p-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
