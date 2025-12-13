import api from "@/domain/common/services/http";

export type ApiResult<T> = {
  data: T;
  status: number;
  headers: Record<string, string>;
};

export type RequestConfig = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

export async function request<T>(config: RequestConfig): Promise<ApiResult<T>> {
  const { url, method = "GET", params, data, headers, signal } = config;
  const res = await api.request<T>({ url, method, params, data, headers, signal });
  return {
    data: res.data as T,
    status: res.status,
    headers: (res.headers || {}) as Record<string, string>,
  };
}

export function createApiClient(basePath = "") {
  return {
    get<T>(path: string, params?: Record<string, unknown>, signal?: AbortSignal) {
      return request<T>({ url: `${basePath}${path}`, method: "GET", params, signal });
    },
    post<T>(path: string, body?: unknown, signal?: AbortSignal) {
      return request<T>({ url: `${basePath}${path}`, method: "POST", data: body, signal });
    },
    put<T>(path: string, body?: unknown, signal?: AbortSignal) {
      return request<T>({ url: `${basePath}${path}`, method: "PUT", data: body, signal });
    },
    patch<T>(path: string, body?: unknown, signal?: AbortSignal) {
      return request<T>({ url: `${basePath}${path}`, method: "PATCH", data: body, signal });
    },
    delete<T>(path: string, signal?: AbortSignal) {
      return request<T>({ url: `${basePath}${path}`, method: "DELETE", signal });
    },
  };
}

export function withCancellation<T>(fn: (signal: AbortSignal) => Promise<T>) {
  const controller = new AbortController();
  const promise = fn(controller.signal);
  return {
    promise,
    cancel: () => controller.abort(),
  };
}

export default {
  request,
  createApiClient,
  withCancellation,
};
