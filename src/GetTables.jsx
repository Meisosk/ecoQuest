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

async function GetFacilities() {
  const { data, error } = await supabase.from("Co2Emissions").select();
  // .eq("CITY NAME", "NEW YORK");
  if (error) {
    console.error("Error fetching data: ", error);
  } else {
    // console.log("Data fetched: ", data);
    return data;
  }
}

export const dataFetchingFunctions = { GetQuests, GetFacilities };
