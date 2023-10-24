import { supabase } from "./GetTables";

async function getUsers() {
  const { data, error } = await supabase.from("users").select();

  if (error) {
    console.error("Error fetching data: ", error);
  } else {
    return data;
  }
}

export default getUsers;
