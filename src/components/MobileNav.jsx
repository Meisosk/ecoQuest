import React, { useState, useEffect } from "react";
import logo from "../assets/ecoquestlogo.png";
import NavModal from "./NavModal";
import { Link } from "react-router-dom";

function MobileNav() {
  const [navOptions, setnavOptions] = useState(false);

  function openModal() {
    setnavOptions(true);
  }

  function closeModal() {
    setnavOptions(false);
  }
  return (
    <>
      <div className="mobilenav bg-secondary w-full justify-between p-5 pl-7">
        <div className="">
          <Link to="/">
            <img className="w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <button onClick={openModal} className="bg-transparent ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0,0,256,256"
          >
            <g fill="#cecece" fillRule="nonzero">
              <g transform="scale(5.12,5.12)">
                <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
              </g>
            </g>
          </svg>
        </button>
        {navOptions && <NavModal closeModal={closeModal} />}
      </div>
    </>
  );
}

export default MobileNav;
