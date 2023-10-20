import { useAuth } from "./AuthProvider"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Profile /> //outlet is a placeholder component. where the component matches the current route to be rendered
  ) : (
    <Navigate to={"/fakesignup"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;