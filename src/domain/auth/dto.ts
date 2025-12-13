export interface RegisterRequest {
  username: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  expiresAt: string;
  username: string;
  user?: User;
}

export interface MeResponse {
  authenticated: boolean;
  user?: User;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  name?: string;
  created_at?: string;
}

export interface ProfileUpdateRequest {
  name?: string;
  email?: string;
}

export interface ProblemDetail {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
}
