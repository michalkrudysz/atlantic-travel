import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";

const BASE_URL = "https://api.atlantictravel.pl";
const TIMEOUT = 10000;

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
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

export default apiClient;
