import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type ContactInfo = {
  phone1?: string;
  phone2?: string;
  phone3?: string;
  email1?: string;
  email2?: string;
  payment_instructions?: string;
  additional_description?: string;
  payment_reference?: string;
};

type ModifyContactTripArgs = {
  trip_id: number;
  contactInfo: ContactInfo;
};

export const useModifyContactTrip = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["modifyContactTrip"],
    mutationFn: async ({ trip_id, contactInfo }: ModifyContactTripArgs) => {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        endpoints.dashboard.modifyContactTrip,
        {
          trip_id,
          ...contactInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["tripContact", data.trip_id], data);
      queryClient.invalidateQueries({ queryKey: ["tripContacts"] });
    },
    onError: (error) => {
      console.error("Error updating contact information for the trip", error);
    },
  });

  return mutate;
};
