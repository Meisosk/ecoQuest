import { useState, useEffect } from "react";
import { supabase } from "../App"
import GetQuests from "../GetQuests";

function QuestsPage() {
  const [quests, setQuests] = useState([]);

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
      console.error('User is not logged in');
      return;
    }
    const updatedQuests = quests.map((quest) => {
      if (quest.id === questId) {
        supabase.from('Accepted').insert([{ user_id: userId, quest_id: questId }]);
        return { ...quest, status: "accepted" };
      }
      return quest;
    });
    setQuests(updatedQuests);
  };

  return (
    <div className="grid grid-cols-4 gap-20">
        {quests.map((quest) => (
          <div className=" bg-green-950 rounded-md flex flex-col" key={quest.id}>
            <h2 className="self-start">Difficulty Level: {quest.level}</h2>
            <p className="bg-green-950 self-center">{quest.text}</p>
            <button className="bg-amber-500 p-1 shadow-xl w-4/5 self-center " onClick={() => handleChoice(quest.id)}>
              ACCEPT THIS QUEST
            </button>
          </div>
        ))}
      </div>
  );
}

export default QuestsPage;
