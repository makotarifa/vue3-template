<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
    <div class="w-96 p-6 rounded-2xl border border-slate-800 bg-slate-900/80 shadow">
      <h2 class="text-lg font-bold mb-4">Register</h2>
      <form class="space-y-3" @submit.prevent="onSubmit">
        <div>
          <label for="username" class="block text-sm mb-1">Username</label>
          <InputText id="username" v-model="values.username" class="w-full" />
        </div>
        <div>
          <label for="password" class="block text-sm mb-1">Password</label>
          <Password id="password" v-model="values.password" class="w-full" toggle-mask />
        </div>
        <Button label="Create account" type="submit" class="w-full" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useZodForm } from "@/domain/common/forms/useZodForm";
import { z } from "zod";
import { useAuthStore } from "@/stores/auth";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

const Schema = z.object({ username: z.string().min(1), password: z.string().min(8) });
const { handleSubmit, values } = useZodForm(Schema, { username: "", password: "" });
const auth = useAuthStore();

const onSubmit = handleSubmit(async (vals) => {
  await auth.register(vals.username, vals.password);
});
</script>

<style scoped></style>
