import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import apiClient from "../api/client";
import endpoints from "../api/endpoints";
import { activateLoading, deactivateLoading } from "../pages/LoadingPage";

export type Testimonial = {
  testimonial_id: number;
  title: string;
  description: string;
  file_url: string;
};

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const response = await apiClient.get<Testimonial[]>(
    endpoints.testimonials.getTestimonials
  );
  return response.data;
};

export const useTestimonials = () => {
  const { isLoading, error, data } = useQuery<Testimonial[], Error>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
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
