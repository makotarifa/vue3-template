import * as authApi from "@/domain/auth/api/authApi";
import type {
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  MeResponse,
  ProfileUpdateRequest,
  User,
} from "../dto";

export async function register(req: RegisterRequest): Promise<AuthResponse> {
  const { data } = await authApi.register(req);
  return data;
}

export async function login(req: LoginRequest): Promise<AuthResponse> {
  const { data } = await authApi.login(req);
  return data;
}

export async function me(): Promise<MeResponse> {
  const { data } = await authApi.me();
  return data;
}

export async function getProfile(): Promise<User> {
  const { data } = await authApi.getProfile();
  return data;
}

export async function updateProfile(req: ProfileUpdateRequest): Promise<User> {
  const { data } = await authApi.updateProfile(req);
  return data;
}

export async function logout(): Promise<void> {
  await authApi.logout();
}

export default { register, login, me, getProfile, updateProfile, logout };
