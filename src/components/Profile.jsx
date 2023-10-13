import React from "react";
import achive1 from "../assets/acheivmentIcons/planet-earth_1598431.png";
import achive2 from "../assets/acheivmentIcons/plant_1892747.png";
import achive3 from "../assets/acheivmentIcons/trophy_3113025.png";

function Profile() {
  return (
    <div className="w-full flex items-center flex-col ">
      <div className="text-center m-1.7 ">
        <h3 className="text-2xl">JoeFink</h3>
        <p>Joefinkel12@gmail.com</p>
      </div>
      <div className="bg-primary w-3/4 h-1/5 rounded-3xl mb-1.7">
        <p className="p-4 text-lg pl-9">Your Emissions</p>
        <div className="relative  left-[10%]">
          <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 rounded-full h-10 w-4/5 mt-1.7"></div>
          <div
            className="bg-black bottom-0 left-[60%] absolute h-10 mt-5"
            style={{ width: "1%" }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between w-3/4 h-3/4 mb-10">
        <div className="h-full w-2/4 bg-primary text-center rounded-3xl m-2">
          <p className="p-5 text-lg">Friends List:</p>
          <div>
            <div className="flex justify-center mt-5">
              <div class="relative overflow-x-auto w-4/6">
                <table class="w-full  text-gray-500 dark:text-gray-400 text-lg">
                  <thead class="text-sm text-gray-700 uppercase bg-background dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Joe
                      </th>
                      <td class="px-6 py-4">Signed In</td>
                    </tr>
                    <tr class="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Bob
                      </th>
                      <td class="px-6 py-4">Signed Out</td>
                    </tr>
                    <tr class="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Hank
                      </th>
                      <td class="px-6 py-4">Signed In</td>
                    </tr>
                    <tr class="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Rob
                      </th>
                      <td class="px-6 py-4">Signed In</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-2/4 bg-primary text-center rounded-3xl m-2">
          <p className="p-5 text-lg">Accepted Achievements</p>
          <div>
            <div className="flex justify-center flex-col">
              <div className="mb-6">
                <div className="flex justify-around items-center w-full ">
                  <img className="h-16" src={achive1} alt="" />
                  <p>Saved the Planet again</p>
                </div>
                <button className="bg-amber-500 mr-5 p-2 py-1">
                  Completed
                </button>
                <button className=" bg-red-700 mr-5 p-2 py-1">Delete</button>
              </div>
              <div className="mb-6">
                <div className="flex justify-around items-center w-full">
                  <img className="h-16" src={achive2} alt="" />
                  <p>Plant a plant again</p>
                </div>
                <button className="bg-amber-500 mr-5 p-2 py-1">
                  Completed
                </button>
                <button className=" bg-red-700 mr-5 p-2 py-1">Delete</button>
              </div>
              <div className="mb-6">
                <div className="flex justify-around items-center w-full">
                  <img className="h-16" src={achive3} alt="" />
                  <p>Take a shorter shower </p>
                </div>
                <button className="bg-amber-500 mr-5 p-2 py-1">
                  Completed
                </button>
                <button className=" bg-red-700 mr-5 p-2 py-1">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
