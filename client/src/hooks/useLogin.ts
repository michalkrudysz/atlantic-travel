import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
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
  const clearToken = () => {
    localStorage.removeItem("token");
  };

  const mutation = useMutation<LoginResponse, AxiosError<LoginError>, string>({
    mutationFn: async (password: string): Promise<LoginResponse> => {
      clearToken();
      try {
        const response = await apiClient.post<LoginResponse>(
          endpoints.auth.login,
          { password }
        );
        if (response.data && response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  useEffect(() => {
    if (mutation.isError && mutation.error.response) {
      setError(
        mutation.error.response.data.message || "Unknown error occurred"
      );
    }
  }, [mutation.isError, mutation.error, setError]);

  return mutation;
};

export default useLogin;
