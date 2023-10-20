import { useState, useEffect } from "react";
import PieChart from "./PieChart";
import achive1 from "../assets/acheivmentIcons/planet-earth_1598431.png";
import achive2 from "../assets/acheivmentIcons/plant_1892747.png";
import achive3 from "../assets/acheivmentIcons/trophy_3113025.png";
import Form from "./Form";
import { useForm } from "./FormProvider";
import { dataFetchingFunctions } from "../GetTables";

function Home() {
  const { FilterCompletedQuests } = dataFetchingFunctions;
  const { formVisible, toggleFormVisibility } = useForm();

  const [completedQuests, setCompletedQuests] = useState([]);

  useEffect(() => {
    const fetchCompletedQuests = async () => {
      const quests = await FilterCompletedQuests();
      setCompletedQuests(quests);
      console.log("Completed quests on Home Page: ", quests);
    };

    fetchCompletedQuests();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    toggleFormVisibility();
  }

  return (
    <>
      {formVisible && <Form onSubmit={onSubmit} />}
      <div className="p-8 w-full bot">
        <div className="flex flex-col justify-between bg-primary rounded-3xl w-full p-8 pb-12 home-container">
          <div className="flex justify-around p-2">
            <div>Experience</div>
            <div>Lv. 1 Eco Beginner</div>
          </div>
          <div>
            <div className="w-full h-10 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-10 bg-xp rounded-full  w-2/4"></div>
            </div>
          </div>
        </div>
        <div className="flex h-4/5 justify-between home-bot">
          <div className="bg-primary h-[70vh] w-6/12 home-container rounded-3xl m-1.7 ml-0 ">
            <PieChart />
            <p
              className="float-right p-5 hover:cursor-pointer text-lg  text-button "
              onClick={toggleFormVisibility}
            >
              Retake Emission Test
            </p>
          </div>
          <div className="flex flex-col w-6/12 ">
            <div className=" bg-primary mt-1.7 rounded-3xl overflow-y-scroll h-[30vh] home-container">
              <p className="text-center text-2xl p-2 pb-5">
                Recent Achievements
              </p>
              <div className="flex justify-center flex-col">
                <div className="flex justify-around items-center w-full ">
                  <div>
                    {completedQuests.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex justify-between pl-9 pr-9 pb-3 items-center"
                      >
                        <img className="h-16" src={achive1} alt="" />
                        <p>{achievement.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-primary mt-1.7 rounded-3xl  h-[35vh] overflow-y-scroll pb-5 home-container">
              <p className="text-center text-xl  p-2 ">Leaderboard</p>
              {/* leaderboard */}
              <div className="flex justify-center mt-5">
                <div className="relative overflow-x-auto w-4/6">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-background dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Rank
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Level
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-secondary border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">Joe</td>
                        <td className="px-6 py-4">99</td>
                      </tr>
                      <tr className="bg-secondary border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          2
                        </th>
                        <td className="px-6 py-4">Bob</td>
                        <td className="px-6 py-4">5</td>
                      </tr>
                      <tr className="bg-secondary border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          3
                        </th>
                        <td className="px-6 py-4">Hank</td>
                        <td className="px-6 py-4">4</td>
                      </tr>
                      <tr className="bg-secondary border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          4
                        </th>
                        <td className="px-6 py-4">Rob</td>
                        <td className="px-6 py-4">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
