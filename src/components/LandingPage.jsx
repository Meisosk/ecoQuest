import logo from "../assets/ecoquestlogo.png";
import trees from "../assets/Vector.png";
import factories from "../assets/Vector (1).png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-screen w-full bg-landbg ">
      <img
        className=" landing-logo absolute left-[60vw]  top-[40vh] w-[300px] h-auto"
        src={logo}
        alt=""
      />
      <div className="flex justify-end mr-10 pt-5">
        <Link to="/signup">
          <button className=" bg-transparent text-black px-2 py-1 text-xl">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="px-2 py-1 text-xl text-stone-100">Sign In</button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-end h-[94%] w-full">
        <img
          className="w-full h-2/5 absolute bg-center bg-no-repeat object-cover mb-[37vh]"
          src={factories}
          alt=""
        />
        <div className="w-full h-2/5  bg-secondary">
          <img
            className="  h-[37.5vh] w-full absolute bg-center bg-no-repeat object-cover "
            src={trees}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
