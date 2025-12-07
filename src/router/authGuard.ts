import { Router } from "vue-router";
import { useAuthStore } from "@/stores/auth";

export function setupAuthGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    const requiresAuth = to.meta?.requiresAuth as boolean;
    if (requiresAuth && !auth.isAuthenticated) {
      return next({ name: "Login" });
    }
    next();
  });
}
