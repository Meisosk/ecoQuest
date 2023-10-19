import { supabase } from "./App";

async function GetQuests() {
  const user = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const acceptedQuery = await supabase
    .from("Accepted")
    .select("questId")
    .eq("userId", user.data.user.id);

  if (acceptedQuery.error) {
    console.error("Error fetching accepted data: ", acceptedQuery.error);
    return [];
  }

  const acceptedQuestIds = acceptedQuery.data.map((row) => row.questId);
  console.log("these are the accepted quest ids: ", acceptedQuestIds);

  const questsQuery = await supabase.from("Quests").select("*");

  if (questsQuery.error) {
    console.error("Error fetching quests data: ", questsQuery.error);
    return [];
  }

  const quests = questsQuery.data;
  console.log("these are the quests coming in: ", quests);

  const filteredQuests = quests.filter(
    (quest) => !acceptedQuestIds.includes(quest.id)
  );
  // console.log("these are coming in from the quest map:", filteredQuests);

  // console.log("Data fetched: ", filteredQuests);
  return filteredQuests;
}

async function FilterAcceptedQuests() {
  const user = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const { data, error } = await supabase
    .from("Quests")
    .select("*, Accepted!inner(*)")
    .neq("id", user.data.user.id);

  if (error) {
    console.error("Error fetching data: ", error);
    return [];
  } else {
    // console.log("Data fetched: ", data);
    return data;
  }
}

async function GetFacilities() {
  const { data, error } = await supabase.from("Co2Emissions").select();
  if (error) {
    console.error("Error fetching data: ", error);
  } else {
    return data;
  }
}

async function GetCities() {
  const { data, error } = await supabase
    .from("Co2Emissions")
    .select("CityName");
  if (error) {
    console.error("Error fetching data: ", error);
  } else {
    return data;
  }
}

async function AddFormData(formDataArray) {
  const user = await supabase.auth.getUser();
  if (!user) {
    return;
  }

  const { error } = await supabase
    .from("users")
    .update({
      FormData: formDataArray,
    })
    .eq("id", user.data.user.id);
  if (error) {
    console.error("Error updating FormData: ", error);
    return null;
  }
  return;
}

async function GetFormData() {
  const user = await supabase.auth.getUser();
  if (!user) {
    return;
  }

  const { data, error } = await supabase
    .from("users")
    .select("FormData")
    .eq("id", user.data.user.id);
  if (error) {
    console.error("Error updating FormData: ", error);
    return null;
  }
  console.log("last signed in on: ", user.data.user.last_sign_in_at);
  return data;
}

export const dataFetchingFunctions = {
  GetQuests,
  GetFacilities,
  GetCities,
  AddFormData,
  GetFormData,
  FilterAcceptedQuests,
};
