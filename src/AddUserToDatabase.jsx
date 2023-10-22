import { useState, useEffect } from "react";
import { supabase } from "./App";
import getUsers from "./GetUsers";

function AddUserToDatabase() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          email: email,
          username: username,
          password: password,
          location: location,
        },
      ]);

    if (error) {
      console.error("Error inserting data: ", error);
    } else {
      const userData = await getUsers();
      setUsers(userData);
    }
  };

  const handleEditUsername = async (username, newUsername) => {
    const { data, error } = await supabase
      .from("Users")
      .update({ username: newUsername })
      .eq("username", username);

    if (error) {
      console.error("Error updating username: ", error);
    } else {
      const userData = await getUsers();
      setUsers(userData);
    }
  };

  return <div>Hi I am just a testing page</div>;
}

export default AddUserToDatabase;
