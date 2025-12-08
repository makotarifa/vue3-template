<template>
  <div>
    <Header />
    <main class="container mx-auto py-6">
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

<style scoped>
.container {
  max-width: 1200px;
}
</style>
