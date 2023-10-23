import React, { useEffect, useState } from "react";
import logo from "../assets/ecoquestlogo.png";
import trees from "../assets/forest.png";
import factories from "../assets/Vector (1).png";
import { Link } from "react-router-dom";

function LandingPage() {
  const [treeDivHeight, setTreeDivHeight] = useState(275); // Initial height for the tree-div

  useEffect(() => {
    // Add an event listener to track the scroll position
    window.addEventListener("scroll", parallaxEffect);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  const parallaxEffect = () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Adjust the position and height of the tree-div
    const newHeight = Math.max(273 + scrollPosition, 0); // Minimum height of 0
    setTreeDivHeight(newHeight);
  };

  return (
    <div className="h-screen w-full bg-landbg overflow-hidden">
      <img
        className="landing-logo absolute left-[60vw] top-[40vh] w-[300px] h-auto"
        src={logo}
        alt=""
      />
      <div className="flex justify-end mr-10 pt-5">
        <Link to="/signup">
          <button className="bg-transparent text-black px-2 py-1 text-xl">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="px-2 py-1 text-xl text-stone-100">Sign In</button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-end h-[94%] w-full">
        <img
          id="factories"
          className="w-full h-2/5 absolute bg-center bg-no-repeat object-cover mb-[37vh]"
          src={factories}
          alt=""
        />

        <div
          className="w-screen bg-secondary tree-div overflow-hidden z-10"
          style={{
            maxHeight: `${treeDivHeight}px`,
            width: "100%",
            position: "relative",
          }}
        >
          <img src={trees} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
