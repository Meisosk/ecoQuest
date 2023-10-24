import { useState, useEffect } from "react";
import { supabase } from "../GetTables";
import { dataFetchingFunctions } from "../GetTables";
import { Link } from "react-router-dom";

const { GetQuests } = dataFetchingFunctions;

function QuestsPage() {
  const [quests, setQuests] = useState([]);
  const [user, setUser] = useState([]);
  const [questAccepted, setQuestAccepted] = useState(false);

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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

  const compareQuestsLevel = (a, b) => a.level - b.level;

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetQuests();
      const sortedQuests = data.sort(compareQuestsLevel);
      setQuests(sortedQuests);
    };
    fetchData();
  }, []);

  const handleChoice = async (questId) => {
    const user = await supabase.auth.getUser();

    if (!user) {
      console.error("User is not logged in");
      return;
    }

    setQuestAccepted(true);

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
      <div className="ml-5 mt-10 w-70 flex items-center flex-col">
        {questAccepted ? (
          <div className=" text-center  bg-primary rounded-3xl m-3 mb-10 w-4/5 p-7 text-xl ">
            Accepted Quests are found{" "}
            <Link to="/profile" className="text-button">
              Here
            </Link>
          </div>
        ) : null}
        {user && user.data && user.data.user !== null ? (
          <div className="flex justify-evenly gap-5 flex-wrap rounded-3xl">
            {quests.map((quest) => (
              <div
                className="bg-primary rounded-3xl flex flex-col p-5 shadow-2xl quest-card text-words"
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
