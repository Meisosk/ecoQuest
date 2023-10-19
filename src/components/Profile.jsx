import React from "react";
import achive1 from "../assets/acheivmentIcons/planet-earth_1598431.png";
import achive2 from "../assets/acheivmentIcons/plant_1892747.png";
import achive3 from "../assets/acheivmentIcons/trophy_3113025.png";
import { useEffect, useState } from "react";
import { useForm } from "./FormProvider";
import { dataFetchingFunctions } from "../GetTables";
import { supabase } from "../App";
const { FilterAcceptedQuests } = dataFetchingFunctions;

function Profile() {
  const [acceptedQuests, setAcceptedQuests] = useState([]);
  const [percent, setPercent] = useState("40%");

  const { emissionTotal } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const data = await FilterAcceptedQuests();
      setAcceptedQuests(data);
      // console.log("this is profile filtered data:", data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(percent);
  }, [percent]);

  useEffect(() => {
    if (emissionTotal <= 16) {
      setPercent("80%");
    } else if (emissionTotal < 19) {
      setPercent("70%");
    } else if (emissionTotal <= 21) {
      setPercent("60%");
    } else if (emissionTotal < 24) {
      setPercent("40%");
    } else if (emissionTotal <= 26) {
      setPercent("20%");
    } else if (emissionTotal >= 31) {
      setPercent("5%");
    }
  }, [emissionTotal]);
  // average 16 a year
  return (
    <div className="w-full h-full flex items-center flex-col ">
      <div className="text-center m-1.7 ">
        <h3 className="text-2xl">JoeFink</h3>
        <p>Joefinkel12@gmail.com</p>
      </div>
      <div className="bg-primary w-3/4 h-2/5 rounded-3xl mb-1.7 ">
        <div className="flex justify-around">
          <p className="p-4 text-lg pl-9">Your Emissions </p>
          <p className="p-4 text-lg pl-9 ">
            Average: 16 Tons <br />
            You Produce: {emissionTotal.toFixed(2)} Tons
          </p>
        </div>
        <div className="relative  left-[10%]">
          <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 rounded-full h-10 w-4/5 m-1.7"></div>
          <div
            className={`bg-black bottom-0  absolute h-10 mt-5`}
            style={{ width: "1%", left: percent }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between w-3/4 h-3/4 mb-10">
        <div className="h-2/4 w-2/4 bg-primary text-center rounded-3xl m-2 overflow-y-scroll">
          <p className="p-5 text-lg">Friends List:</p>
          <div>
            <div className="flex justify-center mt-5">
              <div className="relative overflow-x-auto w-4/6">
                <table className="w-full  text-gray-500 dark:text-gray-400 text-lg">
                  <thead className="text-sm text-gray-700 uppercase bg-background dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Joe
                      </th>
                      <td className="px-6 py-4">Signed In</td>
                    </tr>
                    <tr className="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Bob
                      </th>
                      <td className="px-6 py-4">Signed Out</td>
                    </tr>
                    <tr className="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Hank
                      </th>
                      <td className="px-6 py-4">Signed In</td>
                    </tr>
                    <tr className="bg-secondary border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Rob
                      </th>
                      <td className="px-6 py-4">Signed In</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/4 w-2/4 bg-primary text-center rounded-3xl m-2 overflow-y-scroll">
          <p className="p-5 text-lg">Accepted Achievements</p>
          <div>
            <div className="flex justify-center flex-col">
              {acceptedQuests.map((achievement, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center w-full ">
                    <img className="h-16" src={achive1} alt="" />
                    <p>{achievement.text}</p>
                  </div>
                  <button className="bg-button mr-5 p-2 py-1">Completed</button>
                  <button className="bg-red-700 mr-5 p-2 py-1">Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
