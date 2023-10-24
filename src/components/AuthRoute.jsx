import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Profile from "./Profile";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user || localStorage.getItem("accessToken") ? (
    <Profile />
  ) : (
    <Navigate to={"/signin"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;
