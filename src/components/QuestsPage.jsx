import { useState, useEffect } from "react";
import { supabase } from "../App";
import { dataFetchingFunctions } from "../GetTables";
const { GetQuests } = dataFetchingFunctions;

function QuestsPage() {
  const [quests, setQuests] = useState([]);
  const [user, setUser] = useState([]);

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ") //if you don't put a space in here, it will split on each character instead of each word!
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "); //if you don't put a space in here, it will not put spaces between the rejoined words
  }


  useEffect(() => {
    const userLoggedIn = async () => {
      const user = await supabase.auth.getUser();

      if (!user) {
        console.error("User is not logged in");
        return;
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetQuests();
      setQuests(data);
    };
    fetchData();
  }, []);

  const handleChoice = async (questId) => {
    const user = await supabase.auth.getUser();

    if (!user) {
      console.error("User is not logged in");
      return;
    }

    const { data: existingAccepted, error: existingError } = await supabase
      .from("Accepted")
      .select("*")
      .eq("userId", user.data.user.id)
      .eq("questId", questId);

    if (existingError) {
      console.error("Error", existingError.message);
      return;
    }

    if (existingAccepted && existingAccepted.length > 0) {
      return;
    }

    try {
      const { error } = await supabase
        .from("Accepted")
        .insert([{ userId: user.data.user.id, questId: questId }]);

      if (error) {
        console.error("Error inserting into Accepted table:", error.message);
        return;
      }

      const updatedQuests = quests.filter((quest) => quest.id !== questId);
      setQuests(updatedQuests);
    } catch (error) {
      console.error("Error handling quest choice:", error);
    }
  };

  return (
    <>
      <div className="ml-5 mt-10 w-70">
        {user && user.data && user.data.user !== null ? (
          <div className="flex justify-evenly gap-5 flex-wrap rounded-3xl">
            {quests.map((quest) => (
              <div
                className="bg-primary rounded-3xl flex flex-col p-5 shadow-2xl quest-card"
                key={quest.id}
              >
                <div>
                  <h2 className="self-start">
                    Difficulty Level: {quest.level}
                  </h2>
                </div>
                <div className="w-60 card">
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
        ) : (
          <div className="text-center mt-10 text-gray-600">
            Sign in to view quests.
          </div>
        )}
      </div>
    </>
  );
}

export default QuestsPage;
