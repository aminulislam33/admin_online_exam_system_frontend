import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
  
    if (!isLoggedIn) {
      return <Navigate to="/admin/login" replace />;
    }
  
    return children;
  };

export default ProtectedRoute;