import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen">
      <NavBar />
      <div className="w-full flex justify-center">{children}</div>
    </div>
  );
};
export default Layout;
