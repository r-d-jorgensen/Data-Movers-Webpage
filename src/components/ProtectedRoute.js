import { Outlet, Navigate } from "react-router-dom";
import userService from "../services/userService.js";

const ProtectedRoute = ({ redirectPath = '/', children }) => {
  const user = userService.userData;
  if (user.isAuthed) return children ? children : <Outlet />;
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;