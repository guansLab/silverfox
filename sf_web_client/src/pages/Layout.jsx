import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../NavBar.jsx";
import TopNews from "./TopNews.js";

const Layout = () => {
  return (
    <>
      <NavBar />
      <TopNews/>
      <Outlet />
    </>
  );
};

export default Layout;