import { useState, useEffect } from "react";
import { supabase } from "./App"
import getUsers from "./GetUsers"
import handleDeleteUsers from "./HandleDeleteUsers";


function AddUserToDatabase() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('Users')
      .insert([
        { email: email, username: username, password: password, location: location },
      ]);

      if (error) {
        console.error('Error inserting data: ', error);
      } else {
        console.log('Data inserted: ', {email: email, username: username, password: password, location: location});
        const userData = await getUsers()
        setUsers(userData)
      }
    };
  
  
const handleEditUsername = async (username, newUsername) => {
  const {data, error} = await supabase
  .from('Users')
  .update({username: newUsername})
  .eq('username', username)

  if (error) {
    console.error('Error updating username: ', error);
  } else {
    console.log('Username updated: ', {username: newUsername});
    const userData = await getUsers()
    setUsers(userData)
  }
}





  return (
    <div>
      <h1>Add user info to database</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
           <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
      {users.map((user) => (
        <li className=" bg-red-800 flex justify-center" key={user.username}>
          {user.username}
          <button onClick={() => handleDeleteUsers(user.username)}>Delete</button>
          <button
        onClick={() => {
          const newUsername = prompt('Enter the new username:', user.username);
          if (newUsername) {
            handleEditUsername(user.username, newUsername);
          }
        }}
      >
        Edit
      </button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default AddUserToDatabase;
