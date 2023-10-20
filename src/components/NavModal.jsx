import React from "react";
import { Link } from "react-router-dom";

function NavModal({ closeModal }) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-50 z-10">
      <div className="bg-primary text-center p-10 relative top-64 left-1/4 w-2/4 rounded-3xl nav-modal-size">
        <div className="w-full h-full flex flex-col items-center">
          <h3 className="mb-7 text-lg font-normal text-gray-500 dark:text-gray-400">
            Nav Options
          </h3>
          <Link to="/" className="text-base leading-4 w-full text-gray-300  ">
            <button
              onClick={closeModal}
              className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none  w-full md:w-52 bg-transparent"
            >
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
            <hr />
          </Link>
          <Link
            to="/quests"
            className="text-base leading-4 w-full text-gray-300  "
          >
            <button
              onClick={closeModal}
              className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none  w-full md:w-52 bg-transparent"
            >
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
            <hr />
          </Link>
          <Link
            to="/facilities"
            className="text-base leading-4 w-full text-gray-300  "
          >
            <button
              onClick={closeModal}
              className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none  w-full md:w-52 bg-transparent"
            >
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
            <hr />
          </Link>
          <Link
            to="/donate"
            className="text-base leading-4 w-full text-gray-300  "
          >
            <button
              onClick={closeModal}
              className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none  w-full md:w-52 bg-transparent"
            >
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
            <hr />
          </Link>
          <Link
            to="/about"
            className="text-base leading-4 w-full text-gray-300  "
          >
            <button
              onClick={closeModal}
              className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none  w-full md:w-52 bg-transparent"
            >
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
            <hr />
          </Link>

          <Link
            to="/profile"
            className="text-base leading-4 w-full text-gray-300  "
          >
            <button
              onClick={closeModal}
              className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none  w-full md:w-52 bg-transparent"
            >
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
                className="mt-3"
              >
                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                <circle cx="12" cy="10" r="3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Proflie
            </button>
          </Link>
          <button
            data-modal-hide="popup-modal"
            type="button"
            className="flex justify-around items-center space-x-6  text-gray-400 px-3 py-8 rounded-none text-lg w-full md:w-52 bg-transparent"
            onClick={closeModal}
          >
            Exit Settings
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default NavModal;
