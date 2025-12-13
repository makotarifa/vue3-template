import api from "@/domain/common/services/http";
import type {
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  MeResponse,
  ProfileUpdateRequest,
  User,
} from "../dto";

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

export async function getProfile(): Promise<User> {
  const { data } = await api.get<User>(`${BASE}/users/profile`, { withCredentials: true });
  return data;
}

export async function updateProfile(req: ProfileUpdateRequest): Promise<User> {
  const { data } = await api.put<User>(`${BASE}/users/profile`, req, { withCredentials: true });
  return data;
}

export async function logout(): Promise<void> {
  await api.post<void>(`${BASE}/logout`, {}, { withCredentials: true });
}

export default { register, login, me, getProfile, updateProfile, logout };
