import { supabase } from "./App";

async function getUsernames() {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("username")

    if (error) {
      console.error("Error fetching data: ", error);
      return null;
    } else {
      console.log("Data fetched for friend by username: ", data);
      return data;
    }
  } catch (error) {
    console.error("An error occurred: ", error);
    return null;
  }
}




async function getUserIds() {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("id")
  
      if (error) {
        console.error("Error fetching data: ", error);
        return null;
      } else {
        console.log("Data fetched for friend by username: ", data);
        return data;
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      return null;
    }
  }


  async function getFriends() {
    const user = await supabase.auth.getUser();
    console.log("this is the user id by user data: ", user.data.user.id)
    try {
      const { data, error } = await supabase
        .from("Friends")
        .select("friendId")
        .eq("userId", user.data.user.id)

  
      if (error) {
        console.error("Error fetching data: ", error);
        return null;
      } else {
        console.log("Data fetched for FRIENDS table: ", data);
        return data;
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      return null;
    }
  }


  export const friendFunctions = {
    getUsernames,
    getUserIds,
    getFriends
  };
  