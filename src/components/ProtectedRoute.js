import { Outlet, Navigate } from "react-router-dom";
import { checkAuth } from "../services/userService.js";

const ProtectedRoute = ({ redirectPath = '/', children }) => {
  if (checkAuth) return children ? children : <Outlet />;
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;