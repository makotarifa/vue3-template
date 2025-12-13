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

export function register(req: RegisterRequest) {
  return api.post<void>(`${BASE}/register`, req, { withCredentials: true });
}

export function login(req: LoginRequest) {
  return api.post<AuthResponse>(`${BASE}/login`, req, { withCredentials: true });
}

export function me() {
  return api.get<MeResponse>(`${BASE}/me`, { withCredentials: true });
}

export function getProfile() {
  return api.get<User>(`${BASE}/profile`, { withCredentials: true });
}

export function updateProfile(req: ProfileUpdateRequest) {
  return api.put<User>(`${BASE}/profile`, req, { withCredentials: true });
}

export function logout() {
  return api.post<void>(`${BASE}/logout`, {}, { withCredentials: true });
}
