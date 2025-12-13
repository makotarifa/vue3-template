<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900"
  >
    <div class="w-full max-w-md px-6">
      <div class="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
        <div class="px-6 pt-6">
          <h2 class="text-xl font-semibold text-white">{{ t("auth.register.title") }}</h2>
        </div>
        <form class="px-6 pb-6 pt-4 space-y-4" @submit.prevent="onSubmit">
          <div>
            <label for="username" class="block text-sm text-white/80 mb-1">{{
              t("auth.username")
            }}</label>
            <InputText
              id="username"
              v-model="values.username"
              class="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 px-3 py-2"
            />
          </div>
          <div>
            <label for="password" class="block text-sm text-white/80 mb-1">{{
              t("auth.password")
            }}</label>
            <Password id="password" v-model="values.password" class="w-full" toggle-mask />
          </div>
          <Button :label="t('auth.register.submit')" type="submit" class="w-full" />
        </form>
      </div>
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
import { useI18n } from "vue-i18n";

const Schema = z.object({ username: z.string().min(1), password: z.string().min(8) });
const { handleSubmit, values } = useZodForm(Schema, { username: "", password: "" });
const auth = useAuthStore();
const { t } = useI18n();

const onSubmit = handleSubmit(async (vals) => {
  await auth.register(vals.username, vals.password);
});
</script>

<style scoped></style>
