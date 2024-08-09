import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";
import { useEffect } from "react";
import { activateLoading, deactivateLoading } from "../pages/LoadingPage";

type TripImage = {
  image_url: string;
  description: string;
};

export type Trip = {
  trip_id: number;
  title: string;
  start_date: string;
  end_date: string;
  image: TripImage;
  priority: number;
};

const fetchTrips = async (): Promise<Trip[]> => {
  const response = await apiClient.get(endpoints.trips.getTrips);
  return response.data;
};

export const useTrips = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["trips"],
    queryFn: fetchTrips,
  });

  useEffect(() => {
    if (isLoading) {
      activateLoading();
    } else {
      deactivateLoading();
    }
  }, [isLoading]);

  return { isLoading, error, data };
};
