<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
    <Header />
    <main class="py-8">
      <router-view />
    </main>
    <Footer />
    <PrimeToast position="top-right" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useToast } from "primevue/usetoast";
import emitter from "@/domain/common/services/eventBus";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

const toast = useToast();

function showError(msg: string) {
  toast.add({ severity: "error", summary: "Error", detail: msg, life: 5000 });
}

onMounted(() => {
  emitter.on("error", showError);
});

onUnmounted(() => {
  emitter.off("error", showError);
});
</script>

<style scoped></style>
