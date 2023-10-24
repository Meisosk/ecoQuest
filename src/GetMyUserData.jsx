import { supabase } from "./GetTables";

async function getMyUserData() {
  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      return null;
    } else {
      return user;
    }
  } catch (error) {
    return null;
  }
}

export default getMyUserData;
