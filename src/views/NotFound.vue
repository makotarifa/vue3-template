<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50"
  >
    <div class="max-w-md w-full p-6 rounded-2xl border border-slate-800 bg-slate-900/80 shadow">
      <h1 class="text-2xl font-bold mb-2">404 · Not Found</h1>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        The page you are looking for doesn’t exist.
      </p>
      <div class="flex gap-3">
        <Button label="Go Home" icon="pi pi-home" @click="goHome" />
        <Button label="Login" icon="pi pi-user" severity="secondary" @click="goLogin" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push({ name: "Home" });
const goLogin = () => router.push({ name: "Login" });
</script>

<style scoped>
.max-w-md {
  background-color: white;
}
@media (prefers-color-scheme: dark) {
  .max-w-md {
    background-color: rgba(15, 23, 42, 0.8);
  }
}
</style>
