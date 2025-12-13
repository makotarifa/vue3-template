<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900"
  >
    <div class="w-full max-w-md px-6">
      <div class="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
        <div class="px-6 pt-6">
          <h2 class="text-xl font-semibold text-white">{{ t("auth.login.title") }}</h2>
          <p class="mt-1 text-sm text-white/70">{{ t("auth.login.subtitle") }}</p>
        </div>
        <form class="px-6 pb-6 pt-4 space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label for="username" class="block text-sm text-white/80 mb-1">{{
              t("auth.username")
            }}</label>
            <input
              id="username"
              v-model="username"
              class="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              :placeholder="t('controls.namePlaceholder')"
              autocomplete="username"
            />
          </div>
          <div>
            <label for="password" class="block text-sm text-white/80 mb-1">{{
              t("auth.password")
            }}</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              placeholder="••••••••"
              autocomplete="current-password"
            />
          </div>
          <button
            type="submit"
            class="w-full inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-indigo-900 transition shadow-lg"
          >
            {{ t("auth.login.submit") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useI18n } from "vue-i18n";

const username = ref("user");
const password = ref("password123");
const { t } = useI18n();
const router = useRouter();
const auth = useAuthStore();

const handleSubmit = async () => {
  try {
    await auth.login(username.value, password.value);
    router.push("/");
  } catch (err) {
    console.error("Login failed", err);
  }
};
</script>
