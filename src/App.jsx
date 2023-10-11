import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./input.css";

const supabase = createClient(
  "https://caanhmrdxdwqpumrwxjt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhYW5obXJkeGR3cXB1bXJ3eGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NjU5NzQsImV4cCI6MjAxMjU0MTk3NH0.q1wkSPmAnMr2BcTsEk9fdvN1xslvYTozVP9mDFO81CA"
);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("Users").select();
    setUsers(data);
  }

  return (
    <ul>
      {users.map((user) => (
        <li className=" bg-green-800 flex justify-center" key={user.username}>
          {user.username}
        </li>
      ))}
    </ul>
  );
}

export default App;
