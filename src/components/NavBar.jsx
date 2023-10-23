import logo from "../assets/ecoquestlogo.png";
import { useState, useEffect } from "react";
import { supabase } from "../App";
import { Link } from "react-router-dom";
import { useUser } from "../UserNameAndEmail";
import SettingsModal from "./SettingsModal";

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userLoggedIn = async () => {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        return null;
      }

      return user;
    };

    const userData = async () => {
      const userPromise = userLoggedIn();
      const userData = await userPromise;

      setUser(userData);
    };
    userData();
  }, []);

  const { username } = useUser();
  const { email } = useUser();

  function openModal() {
    setIsModalOpen(true);
  }

  function closeSettingsModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && <SettingsModal closeModal={closeSettingsModal} />}
      <div className="navbar sticky top-0 h-screen">
        <div className="rounded-r bg-secondary flex justify-center w-full p-2 items-center ">
          <img className="w-32" src={logo} alt="logo" />
        </div>
        <div
          id="Main"
          className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500  items-start h-90 w-full sm:w-64 bg-secondary flex-col flex justify-between"
        >
          <div className="flex flex-col justify-start items-center px-6 h-2/3 w-full  ">
            <div
              id="menu1"
              className="flex justify-start  flex-col w-full md:w-auto items-start  pb-1 "
            >
              <Link to="/" className="text-base leading-4 text-gray-300  ">
                <button className="flex justify-around items-center space-x-6 hover:text-white  focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-8 rounded-none  w-full bg-navBtn md:w-52">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cecece"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </button>
              </Link>
              <Link
                to="/quests"
                className="text-base leading-4 text-gray-300  "
              >
                <button className="flex justify-around items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-8 rounded-none  w-full bg-navBtn md:w-52">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cecece"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                  Quests
                </button>
              </Link>
              <Link
                to="/facilities"
                className="text-base leading-4 text-gray-300  "
              >
                <button className="flex justify-around items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-8 rounded-none w-full bg-navBtn md:w-52">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cecece"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  Facilities Near You
                </button>
              </Link>
              <Link
                to="/donate"
                className="text-base leading-4 text-gray-300  "
              >
                <button className="flex justify-around items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-8 rounded-none  w-full bg-navBtn md:w-52">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cecece"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  Donate
                </button>
              </Link>
              <Link to="/about" className="text-base leading-4 text-gray-300 ">
                <button className="flex justify-around items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-8 rounded-none  w-full bg-navBtn md:w-52">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cecece"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  About Us
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center pb-6   px-6  w-full  space-y-32  border-t border-gray-600">
            <div className=" flex justify-between items-center w-full">
              <Link
                to="/profile"
                className="text-base leading-4 text-gray-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cecece"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-3"
                >
                  <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                  <circle cx="12" cy="10" r="3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </Link>
              <Link
                to="/profile"
                className="text-base leading-4 text-gray-300 "
              >
                <div className="flex justify-center items-center  space-x-2">
                  <div></div>
                  <div className="flex justify-start flex-col items-start ">
                    <p className="cursor-pointer text-sm leading-5 text-white p-1">
                      {username}
                    </p>
                    <p className="cursor-pointer text-xs leading-3 text-gray-300">
                      {email}
                    </p>
                  </div>
                </div>
              </Link>
              <button
                className="bg-transparent"
                onClick={
                  user && user.data && user.data.user !== null
                    ? openModal
                    : null
                }
              >
                <svg
                  className="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
