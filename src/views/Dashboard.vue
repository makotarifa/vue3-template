<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 py-10">
    <div class="max-w-5xl mx-auto px-4 lg:px-8">
      <section
        class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 lg:p-10 shadow-2xl"
      >
        <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
        <div v-if="user" class="space-y-1">
          <p class="text-sm">
            Usuario: <span class="font-semibold">{{ user.username }}</span>
          </p>
          <p v-if="user.name" class="text-sm">
            Display Name: <span class="font-semibold">{{ user.name }}</span>
          </p>
        </div>
        <div class="mt-6 flex gap-3">
          <RouterLink class="px-3 py-2 rounded border" :to="{ name: 'Profile' }">Perfil</RouterLink>
          <RouterLink class="px-3 py-2 rounded border" :to="{ name: 'Protected' }"
            >Protected</RouterLink
          >
          <RouterLink class="px-3 py-2 rounded border" :to="{ name: 'Logout' }">Logout</RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
const auth = useAuthStore();
const { user } = storeToRefs(auth);
</script>

<style scoped></style>
