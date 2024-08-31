import { Outlet } from "react-router-dom";
import useDashboard from "../hooks/useDashboard";

const ProtectedRoute = () => {
  useDashboard();

  return <Outlet />;
};

export default ProtectedRoute;
