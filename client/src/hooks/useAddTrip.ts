import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type AddTripData = {
  title: string;
};

export const useAddTrip = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["addTrip"],
    mutationFn: async (tripData: AddTripData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        endpoints.dashboard.addTrip,
        tripData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(["tripsList"]);
    },
    onError: (error) => {
      console.error("Error adding trip", error);
    },
  });

  return mutate;
};
