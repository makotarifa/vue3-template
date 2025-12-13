import api from "@/domain/common/services/http";
import type { RegisterRequest, LoginRequest, AuthResponse, MeResponse } from "../dto";

const BASE = "/api/v1";

export async function register(req: RegisterRequest): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>(`${BASE}/register`, req, { withCredentials: true });
  return data;
}

export async function login(req: LoginRequest): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>(`${BASE}/login`, req, { withCredentials: true });
  return data;
}

export async function me(): Promise<MeResponse> {
  const { data } = await api.get<MeResponse>(`${BASE}/me`, { withCredentials: true });
  return data;
}

export default { register, login, me };
