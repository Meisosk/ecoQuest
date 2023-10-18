import {supabase} from "./App"

async function deleteUser() {
    const { data, error } = await supabase.rpc('deleteUser');
    if (error) {
      console.error('Error calling the deleteUser function:', error);
    } else {
      console.log('User deleted:', data);
    }
  }

export default deleteUser


//this is an rpc call to a function created in raw in supabase:
//CREATE or replace function "deleteUser"()
//   returns void
// LANGUAGE SQL SECURITY DEFINER 
// AS $$
//    delete from auth.users where id = auth.uid();
// $$;