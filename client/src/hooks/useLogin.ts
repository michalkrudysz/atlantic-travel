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
  const mutation = useMutation<LoginResponse, AxiosError<LoginError>, string>({
    mutationFn: async (password: string): Promise<LoginResponse> => {
      const response = await apiClient.post<LoginResponse>(
        endpoints.auth.login,
        { password }
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (mutation.isSuccess && mutation.data.token) {
      localStorage.setItem("token", mutation.data.token);
    }
  }, [mutation.isSuccess, mutation.data]);

  useEffect(() => {
    if (mutation.isError) {
      setError(
        mutation.error.response?.data.message || "Unknown error occurred"
      );
    }
  }, [mutation.isError, mutation.error, setError]);

  return mutation;
};

export default useLogin;
