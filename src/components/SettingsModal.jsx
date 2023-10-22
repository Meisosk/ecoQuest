import React, { useState } from "react";
import { supabase } from "../App";
import deleteUser from "../DeleteUser";

function SettingsModal({ closeModal }) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }
    try {
      setIsLoggingOut(true);
      const { error } = await supabase.auth.signOut();
      if (!error) {
        console.log("User logged out successfully.");
        localStorage.removeItem("accessToken");
      } else {
        console.error("Error signing out:", error.message);
      }
    } catch (error) {
      console.error("Error signing out:", error.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleLogoutAndCloseModal = async () => {
    await handleLogout();
    closeModal();
  };

  const handleDeleteUser = async () => {
    await deleteUser();
    await handleLogout();
    closeModal();
  };

  return (
    <div className=" absolute z-50">
      <div
        id="popup-modal"
        tabIndex="-1"
        className="z-50 relative p-2  md:inset-0 h-[calc(100%-1rem)] max-h-full "
      >
        <div className="fixed z-50 top-[60vh] left-[288px] right-0 w-full max-w-[270px] max-h-full settings-mobile">
          <div className="relative rounded-lg shadow bg-gray-700">
            <div className="p-6  text-center flex flex-col">
              <h3 className="mb-7 text-lg font-normal text-gray-500 dark:text-gray-400">
                Settings
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className=" mb-3 w-56 text-white bg-button hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm  items-center px-5 py-2.5 text-center mr-2 settings-button"
                onClick={handleLogoutAndCloseModal}
              >
                Log Out
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className=" mb-3 w-56 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm items-center px-5 py-2.5 text-center mr-2 settings-button"
                onClick={handleDeleteUser}
              >
                Delete Account
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 w-56 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900  settings-button dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
