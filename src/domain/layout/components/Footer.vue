<template>
  <footer class="py-6 bg-transparent">
    <div
      class="max-w-5xl mx-auto px-4 lg:px-8 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow text-center text-sm text-white"
    >
      {{ t("footer.text", { year: new Date().getFullYear() }) }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped></style>
