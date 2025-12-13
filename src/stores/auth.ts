import { defineStore } from "pinia";
import authService from "@/domain/auth/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    user: null as { username: string } | null,
    initialized: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(username: string, password: string) {
      const data = await authService.login({ username, password });
      this.token = data?.token || null; // do not persist; cookie is HttpOnly
      this.user = data?.username ? { username: data.username } : null;
      return data;
    },
    async register(username: string, password: string) {
      const data = await authService.register({ username, password });
      // optional: auto-login semantics if backend returns token
      this.token = data?.token || null;
      this.user = data?.username ? { username: data.username } : null;
      return data;
    },
    async hydrate() {
      if (this.initialized) return;
      try {
        const data = await authService.me();
        this.user = data?.username ? { username: data.username } : null;
      } catch {
        this.user = null;
      } finally {
        this.initialized = true;
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      // Cookie is managed by server; clearing local state is enough
    },
  },
});

export default useAuthStore;
