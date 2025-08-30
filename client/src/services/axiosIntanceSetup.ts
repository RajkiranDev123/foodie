import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosHeaders } from "axios";

// Response type interface
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  //   timeout: 10000,
  headers: new AxiosHeaders({
    "Content-Type": "application/json",
  }),
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("access_token");
    if (token) {
      // Ensure headers is an AxiosHeaders object
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirect to login?");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
