import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../App";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);
  
    // Function to check for an access token in localStorage
    const checkAccessToken = () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        setUser(supabase.auth.getUser());
        setAuth(true);
      }
    };
  
    useEffect(() => {
      checkAccessToken();
  
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
          localStorage.setItem('accessToken', session.access_token);
  
          setUser(session.user);
          setAuth(true);
        }
      });
  
      return () => {
        data.subscription.unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider;
