<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 py-10">
    <div class="max-w-xl mx-auto px-4 lg:px-8">
      <section
        class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow"
      >
        <h1 class="text-2xl font-bold mb-4">Profile</h1>
        <form class="space-y-3" @submit.prevent="onSubmit">
          <div>
            <label for="displayName" class="block text-sm mb-1">Display Name</label>
            <InputText id="displayName" v-model="displayName" class="w-full" />
          </div>
          <Button label="Save" type="submit" class="w-full" />
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import authService from "@/domain/auth/services/authService";

const store = useAuthStore();
const displayName = ref(store.user?.name || "");

onMounted(async () => {
  const user = await authService.getProfile();
  store.user = { username: user.username, name: user.displayName };
  displayName.value = user.displayName || "";
});

const onSubmit = async () => {
  const user = await authService.updateProfile({ displayName: displayName.value });
  store.user = { username: user.username, name: user.displayName };
};
</script>

<style scoped></style>
