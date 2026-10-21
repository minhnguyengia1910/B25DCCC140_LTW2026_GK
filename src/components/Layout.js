import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ loading, error, buildTag }) => {
  let noiDung = <Outlet />;
  if (loading) {
    noiDung = <p className="status">Đang tải...</p>;
  } else if (error) {
    noiDung = <p className="status status-error">{error}</p>;
  }

  return (
    <div className="app">
      <NavBar />
      <main className="container">{noiDung}</main>
    </div>
  );
};

export default Layout;
