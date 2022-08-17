import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ userData, children }) => {
  if (!userData.isAuthed) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;