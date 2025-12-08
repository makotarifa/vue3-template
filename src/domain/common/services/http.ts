import axios, { AxiosError } from "axios";
import emitter from "./eventBus";

interface ErrorResponse {
  message?: string;
}

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // If you need to add tokens, read them from localStorage
    if (typeof localStorage !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        if (!config.headers) {
          (config.headers as any) = {};
        }
        (config.headers as any).Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => res,
  (error: unknown) => {
    const axiosError = error as AxiosError<ErrorResponse>;
    const responseMessage = axiosError?.response?.data?.message;
    const errorMessage = axiosError?.message;
    const message = responseMessage || errorMessage || "Network error";
    // Emit a global error
    emitter.emit("error", message);
    return Promise.reject(error);
  }
);

export default api;
