import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
