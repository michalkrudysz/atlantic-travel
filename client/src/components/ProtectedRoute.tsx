import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import useDashboard from "../hooks/useDashboard";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const { data, error, isLoading } = useDashboard();

  useEffect(() => {
    if (data) {
      console.log("Dashboard data received:", data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      }
    }
  }, [error, navigate]);

  if (isLoading) {
    return <LoadingPage />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
