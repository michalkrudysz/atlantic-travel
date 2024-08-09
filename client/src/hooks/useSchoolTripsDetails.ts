import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";
import { activateLoading, deactivateLoading } from "../pages/LoadingPage";

export type SchoolTrip = {
  school_trip_id: number;
  name: string;
  description: string;
  trip_duration: number;
  services: string;
};

const fetchSchoolTrips = async (tripId: number): Promise<SchoolTrip[]> => {
  const url = endpoints.schoolTrips.getSchoolTripsDetails.replace(
    ":schoolTrips",
    tripId.toString()
  );
  const response = await apiClient.get<SchoolTrip[]>(url);
  return response.data;
};

export const useSchoolTripsDetails = (tripId: number) => {
  const { isLoading, error, data } = useQuery<SchoolTrip[], Error>({
    queryKey: ["schoolTripsDetails", tripId],
    queryFn: () => fetchSchoolTrips(tripId),
    enabled: !!tripId,
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
