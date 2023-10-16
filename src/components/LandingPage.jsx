// import logo from "../assets/ecoquestlogo.png";
import trees from "../assets/Vector.png";
import factories from "../assets/Vector (1).png";
import { Link } from "react-router-dom";


function LandingPage() {

 

  return (
    <div className="h-screen w-full bg-landbg ">
      {/* <img className="w-1/4 h-1/5" src={logo} alt="" /> */}
      <div className="flex justify-end mr-10 pt-5">
        <Link to="/fakesignup">
          <button className=" bg-transparent text-black px-2 py-1 text-xl">
            Sign Up
          </button>
        </Link>
        <Link to="/fakesignin">
          <button className="px-2 py-1 text-xl text-stone-100">Sign In</button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-end h-[94%] w-full">
        <img className="w-full h-2/5 " src={factories} alt="" />
        <div className="w-full h-2/5 bg-secondary">
          <img className="w-full h-full" src={trees} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
