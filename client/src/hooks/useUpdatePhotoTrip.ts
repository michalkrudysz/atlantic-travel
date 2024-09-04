import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";

type UpdatePhotoInfo = {
  trip_id: number;
  file: File;
  description: string;
};

export const useUpdatePhotoTrip = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["updatePhotoTrip"],
    mutationFn: async ({ trip_id, file, description }: UpdatePhotoInfo) => {
      const formData = new FormData();
      formData.append("trip_id", String(trip_id));
      formData.append("photo", file);
      formData.append("description", description);

      const token = localStorage.getItem("token");
      try {
        const response = await apiClient.post(
          endpoints.dashboard.updatePhotoTrip,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["tripPhoto", data.trip_id], data);
      queryClient.invalidateQueries({ queryKey: ["tripPhotos"] });
    },
  });

  return mutate;
};
