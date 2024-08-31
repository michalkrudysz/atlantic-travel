import { AxiosError } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

const useDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    } else {
      const checkTokenValidity = async () => {
        try {
          await apiClient.get(endpoints.dashboard.getDashboardData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error: unknown) {
          const e = error as AxiosError;
          if (e.response && e.response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login", { replace: true });
          }
        }
      };

      checkTokenValidity();
    }
  }, [navigate, token]);
};

export default useDashboard;
