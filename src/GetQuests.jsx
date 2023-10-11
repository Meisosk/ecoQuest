import { supabase } from "./App";

async function GetQuests() {
  const { data, error } = await supabase.from("Quests").select();
  if (error) {
    console.error("Error fetching data: ", error);
  } else {
    console.log("Data fetched: ", data);
    return data;
  }
}

export default GetQuests;
