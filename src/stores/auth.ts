import { defineStore } from "pinia";
import api from "@/domain/common/services/http";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token:
      (typeof localStorage !== "undefined" && localStorage.getItem("token")) ||
      (null as string | null),
    user: null as any | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(username: string, password: string) {
      const { data } = await api.post("/api/auth/login", { username, password });
      const token = data?.token;
      if (token) {
        this.token = token;
        this.user = data.user || null;
        localStorage.setItem("token", token);
      }
      return data;
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});

export default useAuthStore;
