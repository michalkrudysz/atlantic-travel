import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";
import { activateLoading, deactivateLoading } from "../pages/LoadingPage";

export type TripDetails = {
  start_date: string;
  end_date: string;
  price_per_person: number;
  additional_costs: number;
  description: string;
  trip_id: number;
  tripDays: Array<{ day_number: string; description: string }>;
  includedExcursions: Array<{ description: string }>;
  optionalExcursions: Array<{ description: string }>;
  services: Array<{ description: string }>;
  tripContacts: {
    phone1: string;
    phone2: string;
    phone3: string;
    email1: string;
    email2: string;
    payment_instructions: string;
    additional_description: string;
    payment_reference: string;
  };
};

const fetchTripDetails = async (tripId: number): Promise<TripDetails> => {
  const response = await apiClient.get<TripDetails>(
    endpoints.trips.getTripDetails.replace(":tripId", tripId.toString())
  );
  return response.data;
};

export const useTripDetails = (tripId: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tripDetails", tripId],
    queryFn: () => fetchTripDetails(tripId),
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
