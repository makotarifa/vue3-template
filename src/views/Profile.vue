<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900"
  >
    <div class="w-full max-w-md px-6">
      <div class="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
        <div class="px-6 pt-6">
          <h1 class="text-xl font-semibold text-white">{{ t("profile.title") }}</h1>
        </div>
        <form class="px-6 pb-6 pt-4 space-y-4" @submit.prevent="onSubmit">
          <div>
            <label for="displayName" class="block text-sm text-white/80 mb-1">{{
              t("profile.displayName")
            }}</label>
            <InputText
              id="displayName"
              v-model="displayName"
              class="w-full rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 px-3 py-2"
            />
          </div>
          <Button :label="t('profile.save')" type="submit" class="w-full" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import authService from "@/domain/auth/services/authService";
import { useI18n } from "vue-i18n";

const store = useAuthStore();
const displayName = ref(store.user?.name || "");
const { t } = useI18n();

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
