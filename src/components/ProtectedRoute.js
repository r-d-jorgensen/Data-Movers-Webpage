import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn.isAuthed) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;