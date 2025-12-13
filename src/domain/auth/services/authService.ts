import api from "@/domain/common/services/http";
import type { RegisterRequest, LoginRequest, AuthResponse } from "../dto";

const BASE = "/api/v1";

export async function register(req: RegisterRequest) {
  const { data } = await api.post<AuthResponse>(`${BASE}/register`, req, { withCredentials: true });
  return data;
}

export async function login(req: LoginRequest) {
  const { data } = await api.post<AuthResponse>(`${BASE}/login`, req, { withCredentials: true });
  return data;
}

export default { register, login };
