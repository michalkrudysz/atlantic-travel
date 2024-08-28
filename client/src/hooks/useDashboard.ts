import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";
import { activateLoading, deactivateLoading } from "../pages/LoadingPage";
import type { AxiosError } from "axios";

export type DashboardResponse = {
  message: string;
  data?: any;
};

type DashboardError = {
  message: string;
};

const fetchDashboardData = async (): Promise<DashboardResponse> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Brak tokena.");
  }

  const response = await apiClient.get<DashboardResponse>(
    endpoints.dashboard.getDashboardData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

const useDashboard = () => {
  const { isLoading, error, data } = useQuery<
    DashboardResponse,
    AxiosError<DashboardError>
  >({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
  });

  useEffect(() => {
    if (isLoading) {
      activateLoading();
    } else {
      deactivateLoading();
    }
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      console.error("Błąd podczas pobierania danych z dashbordu:", error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log("Dane z dashbordu:", data);
    }
  }, [data]);

  return { isLoading, error, data };
};

export default useDashboard;
