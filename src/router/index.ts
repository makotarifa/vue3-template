import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Navigation UX without external progress bar

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { title: "Login" },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: { title: "Register", requiresGuest: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true, title: "Dashboard" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: { requiresAuth: true, title: "Profile" },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/views/Logout.vue"),
    meta: { requiresAuth: true, title: "Logout" },
  },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("@/views/Home.vue"),
    meta: { requiresAuth: true, title: "Protected" },
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("@/views/Error.vue"),
    meta: { title: "Error" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const base = "Vue Template";
  const title = (to.meta?.title as string | undefined) || base;
  document.title = to.meta?.title ? `${title} · ${base}` : base;
  next();
});

router.afterEach(() => {});

export default router;
