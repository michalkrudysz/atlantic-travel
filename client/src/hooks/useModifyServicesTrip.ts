import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type ServicesData = {
  trip_id: number;
  services: { description: string }[];
};

export const useModifyServicesTrip = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["modifyServicesTrip"],
    mutationFn: async (servicesData: ServicesData) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        endpoints.dashboard.modifyServicesTrip,
        servicesData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["services", data.trip_id], data.services);
      queryClient.invalidateQueries({ queryKey: ["trips", data.trip_id] });
    },
    onError: (error) => {
      console.error("Error modifying services for the trip", error);
    },
  });

  return mutate;
};
