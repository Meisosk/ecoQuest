import { supabase } from "./App";

async function getMyUserData() {
  const user = await supabase.auth.getUser();
  if (user) {
    return user;
  }

  return null;
}

export default getMyUserData;
