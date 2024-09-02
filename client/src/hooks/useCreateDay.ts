import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type CreateDayData = {
  trip_id: number;
  day_number: string;
  description: string;
};

export const useCreateDay = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["createDay"],
    mutationFn: async (createData: CreateDayData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        endpoints.dashboard.createDay,
        createData,
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
    },
    onError: (error) => {
      console.error("Error creating day info", error);
    },
  });

  return mutate;
};
