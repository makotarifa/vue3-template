export interface RegisterRequest {
  username: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  expiresAt: string;
  username: string;
}

export interface MeResponse {
  username: string;
  roles: string[];
}

export interface User {
  username: string;
  displayName?: string;
  createdAt?: string;
}

export interface ProfileUpdateRequest {
  displayName?: string;
}

export interface ProblemDetail {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
}
