<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50"
  >
    <div class="max-w-md w-full p-6 rounded-2xl border border-slate-800 bg-slate-900/80 shadow">
      <h1 class="text-2xl font-bold mb-2">{{ t("error.title") }}</h1>
      <p class="text-slate-600 dark:text-slate-300 mb-4">{{ t("error.unexpected") }}</p>
      <div v-if="message" class="text-sm text-rose-300 mb-4">{{ message }}</div>
      <div class="flex gap-3">
        <Button :label="t('error.goHome')" icon="pi pi-home" @click="goHome" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const route = useRoute();
const message = (route.query?.message as string | undefined) || "";
const goHome = () => router.push({ name: "Home" });
const { t } = useI18n();
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
