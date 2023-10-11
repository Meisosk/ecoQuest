import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <NavBar />
      <div className="w-full p-4">{children}</div>
    </div>
  );
};
export default Layout;
