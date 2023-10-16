import { useAuth } from "./AuthProvider"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet /> //outlet is a placeholder component. where the component matches the current route to be rendered
  ) : (
    <Navigate to={"/"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;