import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";

const BASE_URL = "http://localhost:3000"; // Zmień to na właściwy URL twojego API
const TIMEOUT = 10000; // 10 sekund

const config: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
};

const apiClient: AxiosInstance = axios.create(config);

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Tutaj możesz modyfikować każdy request przed wysłaniem
    return config;
  },
  (error: unknown) => {
    // Obsługa błędów requestu
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Możesz tutaj przetwarzać każdą odpowiedź
    return response;
  },
  async (error: unknown) => {
    // Obsługa błędów odpowiedzi
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // Tutaj logika odświeżania tokenu lub przekierowania do strony logowania
    }
    return Promise.reject(error);
  }
);

export default apiClient;
