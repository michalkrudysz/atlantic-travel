import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type UpdateDayData = {
  trip_id: number;
  day_number: string;
  description: string;
  new_day_number?: string;
};

export const useUpdateDay = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["updateDay"],
    mutationFn: async (updateData: UpdateDayData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.patch(
        endpoints.dashboard.updateDay,
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
      queryClient.setQueryData(
        ["tripDay", data.trip_id, data.day_number],
        data
      );
      queryClient.invalidateQueries({ queryKey: ["trip", data.trip_id] });
      queryClient.invalidateQueries({ queryKey: ["day"] });
    },
    onError: (error) => {
      console.error("Error updating day info", error);
    },
  });

  return mutate;
};
