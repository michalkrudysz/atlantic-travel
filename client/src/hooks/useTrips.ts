import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

export interface TripImage {
  image_url: string;
  description: string;
}

export interface Trip {
  trip_id: number;
  title: string;
  start_date: string;
  end_date: string;
  image: TripImage;
  priority: number;
}

const fetchTrips = async (): Promise<Trip[]> => {
  const response = await apiClient.get(endpoints.trips.getTrips);
  return response.data;
};

export const useTrips = () => {
  return useQuery({
    queryKey: ["trips"],
    queryFn: fetchTrips,
  });
};
