import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type OptionalExcursionsData = {
  trip_id: number;
  excursions: { description: string }[];
};

export const useModifyOptionalExcursionsTrip = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["modifyOptionalExcursionsTrip"],
    mutationFn: async (excursionsData: OptionalExcursionsData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        endpoints.dashboard.modifyOptionalExcursionsTrip,
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
        ["optionalExcursions", data.trip_id],
        data.excursions
      );
      queryClient.invalidateQueries({ queryKey: ["trips", data.trip_id] });
    },
    onError: (error) => {
      console.error("Error modifying optional excursions for the trip", error);
    },
  });

  return mutate;
};
