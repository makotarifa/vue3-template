<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50"
  >
    <div
      class="max-w-md w-full p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow"
    >
      <h1 class="text-2xl font-bold mb-2">{{ t("logout.title") }}</h1>
      <p class="text-slate-600 dark:text-slate-300">{{ t("logout.wait") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useI18n } from "vue-i18n";

const router = useRouter();
const auth = useAuthStore();
const { t } = useI18n();

onMounted(async () => {
  await auth.logout();
  router.replace({ name: "Home" });
});
</script>

<style scoped></style>
