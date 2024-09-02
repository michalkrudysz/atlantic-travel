import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type IncludedExcursionsData = {
  trip_id: number;
  excursions: { description: string }[];
};

export const useModifyIncludedExcursions = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["modifyIncludedExcursions"],
    mutationFn: async (excursionsData: IncludedExcursionsData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        endpoints.dashboard.modifyIncludedExcursionsTrip,
        excursionsData,
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
        ["includedExcursions", data.trip_id],
        data.excursions
      );

      queryClient.invalidateQueries({ queryKey: ["trips", data.trip_id] });
    },
    onError: (error) => {
      console.error("Error modifying included excursions for the trip", error);
    },
  });

  return mutate;
};
