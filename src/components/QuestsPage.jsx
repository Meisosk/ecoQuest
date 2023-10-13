import { useState, useEffect } from "react";
import { supabase } from "../App";
import GetQuests from "../GetQuests";

function QuestsPage() {
  const [quests, setQuests] = useState([]);

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ") //if you don't put a space in here, it will split on each character instead of each word!
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "); //if you don't put a space in here, it will not put spaces between the rejoined words
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetQuests();
      setQuests(data);
    };
    fetchData();
  }, []);

  const handleChoice = async (questId) => {
    const user = supabase.auth.user();
    const userId = user ? user.id : null;

    if (!userId) {
      console.error("User is not logged in");
      return;
    }
    const updatedQuests = quests.map((quest) => {
      if (quest.id === questId) {
        supabase
          .from("Accepted")
          .insert([{ user_id: userId, quest_id: questId }]);
        return { ...quest, status: "accepted" };
      }
      return quest;
    });
    setQuests(updatedQuests);
  };

  return (
    <>
      <div className="ml-5 mt-10 w-70 ">
        <div className="flex justify-even gap-5 flex-wrap rounded-3xl">
          {quests.map((quest) => (
            <div
              className=" bg-primary rounded-3xl flex flex-col p-5 shadow-2xl"
              key={quest.id}
            >
              <div>
                <h2 className="self-start">Difficulty Level: {quest.level}</h2>
              </div>
              <div className="w-60">
                <p className="bg-primary max-w-sm mt-4 mb-4 ">
                  {capitalizeWords(quest.text)}
                </p>
              </div>
              <div className="flex flex-col justify-between text-center mt-auto">
                <button
                  className="bg-button p-1 shadow-xl w-auto"
                  onClick={() => handleChoice(quest.id)}
                >
                  ACCEPT THIS QUEST
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuestsPage;
