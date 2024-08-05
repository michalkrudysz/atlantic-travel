import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/client";

export interface TripDetails {
  start_date: string;
  end_date: string;
  price_per_person: number;
  additional_costs: number;
  description: string;
  trip_id: number;
  TripDays: { day_number: string; description: string }[];
  IncludedExcursions: { description: string }[];
  OptionalExcursions: { description: string }[];
  Services: { description: string }[];
  TripContacts: {
    phone1: string;
    phone2: string;
    phone3: string;
    email1: string;
    email2: string;
    payment_instructions: string;
    additional_description: string;
    payment_reference: string;
  };
}

const fetchTripDetails = async (tripId: number): Promise<TripDetails> => {
  const response = await apiClient.get(`/trips/${tripId}`);
  return response.data;
};

export const useTripDetails = (tripId: number) => {
  return useQuery({
    queryKey: ["tripDetails", tripId],
    queryFn: () => fetchTripDetails(tripId),
    enabled: !!tripId,
  });
};
