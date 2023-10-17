import { supabase } from "./App";

async function GetQuests() {
  const user = await supabase.auth.getUser();

if (!user) {
  return;
}

  const { data, error } = await supabase
  .from("Quests")
  .select("*, Accepted(*)")
    .is("Accepted", null)


  if (error) {
    console.error("Error fetching data: ", error);
    return [];
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




// async function FilterAcceptedQuests() {
//   const user = await supabase.auth.getUser();

// if (!user) {
//   return;
// }

//   const { data, error } = await supabase
//   .from("Quests")
//   .select("*, Accepted!inner(*)")
//     .neq("id", user.data.user.id)


//   if (error) {
//     console.error("Error fetching data: ", error);
//     return [];
//   } else {
//     console.log("Data fetched: ", data);
//     return data;
//   }
// }