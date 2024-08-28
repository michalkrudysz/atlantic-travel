import { useMutation } from "@tanstack/react-query";
import apiClient from "../api/client";
import type { AxiosError } from "axios";
import endpoints from "../api/endpoints";

type LoginResponse = {
  token?: string;
  message?: string;
};

type LoginError = {
  message: string;
};

const useLogin = (setError: (message: string) => void) => {
  const mutation = useMutation<LoginResponse, AxiosError<LoginError>, string>({
    mutationFn: async (password: string): Promise<LoginResponse> => {
      const response = await apiClient.post<LoginResponse>(
        endpoints.auth.login,
        { password }
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    },
    onError: (error) => {
      setError(error.response?.data.message || "Unknown error occurred");
    },
  });

  return mutation;
};

export default useLogin;
