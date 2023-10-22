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

  const questsQuery = await supabase.from("Quests").select("*");

  if (questsQuery.error) {
    console.error("Error fetching quests data: ", questsQuery.error);
    return [];
  }

  const quests = questsQuery.data;

  const filteredQuests = quests.filter(
    (quest) => !acceptedQuestIds.includes(quest.id)
  );

  return filteredQuests;
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
  return data;
}

async function GetQuestPoints(questId) {
  const { data, error } = await supabase
    .from("Quests")
    .select("xp")
    .eq("id", questId);

  if (error) {
    console.error("Error deleting from acceptedIds:", error.message);
    return;
  }

  return data;
}

async function getUsersPoints(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("points")
    .eq("id", userId);

  if (error) {
    console.error("Error deleting from acceptedIds:", error.message);
    return;
  }

  return data;
}

async function UpdatePoints(userId, updatedpoints) {
  const { data, error } = await supabase
    .from("users")
    .update({ points: updatedpoints })
    .eq("id", userId);

  if (error) {
    console.error("Error deleting from acceptedIds:", error.message);
    return;
  }

  return data;
}

async function GetLocation(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("location")
    .eq("id", userId);
  if (error) {
    console.error("Error updating FormData: ", error);
    return null;
  }
  return data;
}

// async function FilterAcceptedQuests() {
//   const user = await supabase.auth.getUser();

//   if (!user) {
//     return;
//   }

//   const { data, error } = await supabase
//     .from("Quests")
//     .select("*, Accepted!inner(*)")
//     .neq("id", user.data.user.id);

//   if (error) {
//     console.error("Error fetching data: ", error);
//     return [];
//   } else {
//     return data;
//   }
// }

async function FilterAcceptedQuests() {
  const user = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const userId = user.data.user.id;

  const { data, error } = await supabase
    .from("Accepted")
    .select("*, quest:Quests(*)")
    .eq("userId", userId);

  if (error) {
    console.error("Error fetching data: ", error);
    return [];
  } else {
    return data.map((entry) => entry.quest);
  }
}

async function FilterCompletedQuests() {
  const user = await supabase.auth.getUser();

  if (!user) {
    return [];
  }
  const userId = user.data.user.id;

  const { data, error } = await supabase
    .from("CompletedQuests")
    .select("*, quest:Quests(*)")
    .eq("userId", userId);

  if (error) {
    console.error("Error fetching data: ", error);
    return [];
  } else {
    return data.map((entry) => entry.quest);
  }
}

async function PureAccepted() {
  const { data, error } = await supabase.from("Accepted").select("*");
  if (error) {
    console.error("Error fetching data for PureAccepted: ", error);
  } else {
    return data;
  }
}

export const dataFetchingFunctions = {
  GetQuests,
  GetFacilities,
  GetCities,
  AddFormData,
  GetFormData,
  FilterAcceptedQuests,
  FilterCompletedQuests,
  PureAccepted,
  GetQuestPoints,
  getUsersPoints,
  UpdatePoints,
  GetLocation,
};
