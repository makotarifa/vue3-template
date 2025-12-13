import { defineStore } from "pinia";
import authService from "@/domain/auth/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    user: null as { username: string; email?: string; name?: string } | null,
    initialized: false,
    loading: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(username: string, password: string) {
      this.loading = true;
      const data = await authService.login({ username, password });
      this.token = null;
      this.user = data?.username ? { username: data.username } : null;
      this.loading = false;
      return data;
    },
    async register(username: string, password: string) {
      this.loading = true;
      await authService.register({ username, password });
      this.token = null;
      this.user = null;
      this.loading = false;
      return { success: true };
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

    async logout() {
      await authService.logout();
      this.token = null;
      this.user = null;
      // Cookie is managed by server; clearing local state is enough
    },
  },
});

export default useAuthStore;
