import { Router } from "vue-router";
import { useAuthStore } from "@/stores/auth";

export function setupAuthGuard(router: Router) {
  router.beforeEach(async (to) => {
    const auth = useAuthStore();
    const requiresAuth = !!(to.meta?.requiresAuth as boolean);
    const requiresGuest = !!(to.meta?.requiresGuest as boolean);

    if (!auth.initialized) {
      await auth.hydrate();
    }

    if (requiresAuth && !auth.isAuthenticated) {
      return { name: "Login", query: { redirect: to.fullPath } };
    }

    if (requiresGuest && auth.isAuthenticated) {
      return { name: "Dashboard" };
    }

    return true;
  });
}
