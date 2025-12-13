import axios, { AxiosError } from "axios";
import emitter from "./eventBus";

interface ErrorResponse {
  message?: string;
}

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => config,
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
