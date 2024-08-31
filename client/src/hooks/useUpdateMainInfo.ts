import { useMutation, UseMutationResult } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";
import { useEffect } from "react";
import { activateLoading, deactivateLoading } from "../pages/LoadingPage";

type updateMainInfo = {
  trip_id: number;
  start_date: string;
  end_date: string;
  additional_costs: number;
  description: string;
  priority: number;
  title: string;
};

export const useUpdateDashboardInfo = (): UseMutationResult<
  updateMainInfo,
  Error,
  updateMainInfo
> => {
  const mutation = useMutation<updateMainInfo, Error, updateMainInfo>({
    mutationFn: async (updateData: updateMainInfo) => {
      const response = await apiClient.patch(
        endpoints.dashboard.updateMainInfo,
        updateData
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (mutation.status === "pending") {
      activateLoading();
    } else {
      deactivateLoading();
    }
  }, [mutation.status]);

  return mutation;
};
