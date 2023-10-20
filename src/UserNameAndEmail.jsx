import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./App";
import getMyUserData from "./GetMyUserData";

const UserContext = createContext({});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getMyUserData();
      if (user) {
        setUserData(user);

        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("username")
          .eq("id", user.data.user.id)
          .single();

        if (!userError) {
          setUsername(userData.username);
        } else {
          console.error("Error fetching username:", userError);
        }

        const { data: emailData, error: emailError } = await supabase
          .from("users")
          .select("email")
          .eq("id", user.data.user.id)
          .single();

        if (!emailError) {
          setEmail(emailData.email);
        } else {
          console.error("Error fetching email:", emailError);
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ username, email }}>
      {children}
    </UserContext.Provider>
  );
};
