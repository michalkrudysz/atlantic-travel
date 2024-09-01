import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type UpdateMainInfo = {
  trip_id: number;
  start_date: string;
  end_date: string;
  additional_costs: number;
  description: string;
  priority: number;
  title: string;
  price_per_person: number;
};

export const useUpdateMainInfo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["updateMainInfo"],
    mutationFn: async (updateData: UpdateMainInfo) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.patch(
        endpoints.dashboard.updateMainInfo,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["trip", data.trip_id], data);
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
    onError: (error) => {
      console.error("Error updating the trip info", error);
    },
  });

  return mutate;
};
