<template>
  <header class="py-4 bg-transparent">
    <div
      class="max-w-5xl mx-auto px-4 lg:px-8 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        <img src="/src/assets/vue.svg" class="logo vue" alt="Vue logo" />
        <h1 class="text-base lg:text-lg font-semibold text-white">{{ t("app.title") }}</h1>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="px-3 py-1.5 rounded-full text-xs font-medium transition border border-white/20 hover:bg-white/20 text-white"
          :class="{ 'bg-white/30': locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <button
          class="px-3 py-1.5 rounded-full text-xs font-medium transition border border-white/20 hover:bg-white/20 text-white"
          :class="{ 'bg-white/30': locale === 'es' }"
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
