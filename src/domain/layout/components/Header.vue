<template>
  <header class="p-4 bg-white dark:bg-gray-900 border-b">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        <img src="/src/assets/vue.svg" class="logo vue" alt="Vue logo" />
        <h1 class="text-lg font-semibold">{{ t("app.title") }}</h1>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="px-3 py-1.5 rounded-full text-xs font-medium transition border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          :class="{ 'bg-slate-200 dark:bg-slate-700': locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <button
          class="px-3 py-1.5 rounded-full text-xs font-medium transition border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          :class="{ 'bg-slate-200 dark:bg-slate-700': locale === 'es' }"
          @click="setLocale('es')"
        >
          ES
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
function setLocale(l: string) {
  locale.value = l;
  localStorage.setItem("locale", l);
}
</script>

<style scoped>
.logo {
  height: 3rem;
}
</style>
