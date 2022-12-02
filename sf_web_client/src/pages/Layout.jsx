import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../NavBar.jsx";
import NavBar2 from "../NavBar2.jsx"

const Layout = () => {
  return (
    <>
      <NavBar />
      <NavBar2 />
      <Outlet />
    </>
  );
};

export default Layout;