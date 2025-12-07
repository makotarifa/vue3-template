import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  { path: "/login", name: "Login", component: () => import("@/views/Login.vue") },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("@/views/Home.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
