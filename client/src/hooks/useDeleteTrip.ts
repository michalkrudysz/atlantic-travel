import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type DeleteTripData = {
  trip_id: number;
};

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["deleteTrip"],
    mutationFn: async (deleteTripData: DeleteTripData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.delete(endpoints.dashboard.deleteTrip, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: deleteTripData,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
    onError: (error) => {
      console.error("Error deleting the trip", error);
    },
  });

  return mutate;
};
