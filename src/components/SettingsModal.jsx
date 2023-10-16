import React from "react";

function SettingsModal({ closeModal }) {
  return (
    <div className=" absolute ">
      <div
        id="popup-modal"
        tabIndex="-1"
        className=" relativez-50  p-2  md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative  top-[-80px] left-64 right-0 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6  text-center flex flex-col">
              {/* <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg> */}
              <h3 className="mb-7 text-lg font-normal text-gray-500 dark:text-gray-400">
                Settings
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className=" mb-3 w-56 text-white bg-button hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm  items-center px-5 py-2.5 text-center mr-2"
              >
                Log Out
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className=" mb-3 w-56 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm items-center px-5 py-2.5 text-center mr-2"
              >
                Delete Account
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 w-56 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={closeModal}
              >
                Exit Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;