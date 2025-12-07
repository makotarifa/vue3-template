<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-96 p-6 bg-white rounded shadow">
      <h2 class="text-lg font-bold mb-4">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="block text-sm mb-1">Username</label>
          <input v-model="username" class="w-full border px-3 py-2" />
        </div>
        <div class="mb-3">
          <label class="block text-sm mb-1">Password</label>
          <input v-model="password" type="password" class="w-full border px-3 py-2" />
        </div>
        <div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const username = ref("user");
const password = ref("password");
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

<style scoped></style>
