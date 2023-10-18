import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./input.css";
import AddUserToDatabase from "./AddUserToDatabase";


export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    setUsers(data);
  }



  return (
    <>
    <AddUserToDatabase/>
    </>
  );
}

export default App;
