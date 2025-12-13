<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 py-10">
    <div class="max-w-xl mx-auto px-4 lg:px-8">
      <section
        class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow"
      >
        <h1 class="text-2xl font-bold mb-4">Profile</h1>
        <form class="space-y-3" @submit.prevent="onSubmit">
          <div>
            <label for="name" class="block text-sm mb-1">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>
          <div>
            <label for="email" class="block text-sm mb-1">Email</label>
            <InputText id="email" v-model="email" class="w-full" />
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
const name = ref(store.user?.name || "");
const email = ref(store.user?.email || "");

onMounted(async () => {
  const user = await authService.getProfile();
  store.user = { username: user.username, name: user.name, email: user.email };
  name.value = user.name || "";
  email.value = user.email || "";
});

const onSubmit = async () => {
  const user = await authService.updateProfile({ name: name.value, email: email.value });
  store.user = { username: user.username, name: user.name, email: user.email };
};
</script>

<style scoped></style>
