<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 py-10">
    <div class="max-w-5xl mx-auto px-4 lg:px-8">
      <section
        class="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-slate-900/60 shadow-2xl p-8 lg:p-10"
      >
        <div
          class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-tight text-slate-200"
        >
          <span
            class="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100 border border-emerald-400/30"
          >
            Vue 3
          </span>
          <span class="rounded-full bg-sky-500/20 px-3 py-1 text-sky-100 border border-sky-400/30">
            Vite
          </span>
          <span
            class="rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-100 border border-indigo-400/30"
          >
            Tailwind
          </span>
          <span
            class="rounded-full bg-amber-500/20 px-3 py-1 text-amber-100 border border-amber-400/30"
          >
            PrimeVue
          </span>
          <span
            class="rounded-full bg-fuchsia-500/20 px-3 py-1 text-fuchsia-100 border border-fuchsia-400/30"
          >
            Playwright
          </span>
          <span
            class="rounded-full bg-rose-500/20 px-3 py-1 text-rose-100 border border-rose-400/30"
          >
            MSW
          </span>
        </div>

        <div class="mt-6 space-y-4">
          <h1 class="text-3xl lg:text-4xl font-bold leading-tight text-slate-50">
            {{ t("app.title") }}
          </h1>
          <p class="text-base lg:text-lg text-slate-200/80 max-w-3xl">
            {{ t("app.subtitle") }}
          </p>
          <p class="text-sm text-slate-300/80">{{ t("app.tailwindInfo") }}</p>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow">
            <p class="text-xs uppercase tracking-wide text-emerald-200/80">Mocks</p>
            <p class="text-sm text-slate-200">MSW listo para dev y tests.</p>
          </div>
          <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow">
            <p class="text-xs uppercase tracking-wide text-sky-200/80">E2E</p>
            <p class="text-sm text-slate-200">Playwright configurado con web server.</p>
          </div>
          <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow">
            <p class="text-xs uppercase tracking-wide text-indigo-200/80">Calidad</p>
            <p class="text-sm text-slate-200">ESLint, TypeScript y CI listos.</p>
          </div>
        </div>
      </section>

      <section class="mt-8 grid gap-6 lg:grid-cols-3">
        <Card class="lg:col-span-2">
          <template #title>{{ t("controls.primevueControls") }}</template>
          <template #content>
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-3">
                <Button :label="t('controls.increment')" icon="pi pi-plus" @click="inc" />
                <span class="rounded border border-slate-700 px-3 py-2 bg-slate-900/80">
                  {{ t("controls.count") }}: {{ count }}
                </span>
              </div>
              <InputText
                v-model="name"
                :placeholder="t('controls.namePlaceholder')"
                class="w-full"
              />
              <div class="flex items-center gap-3">
                <Checkbox v-model="subscribed" input-id="subscribe" binary />
                <label for="subscribe">{{ t("controls.subscribe") }}</label>
              </div>
              <div class="flex gap-3">
                <Button
                  :label="t('controls.openDialog')"
                  icon="pi pi-external-link"
                  @click="dialogVisible = true"
                />
              </div>
            </div>
          </template>
        </Card>

        <Card>
          <template #title>{{ t("controls.form") }}</template>
          <template #content>
            <form class="space-y-3" @submit.prevent="submitForm">
              <InputText
                v-model="formName"
                :placeholder="t('controls.fullNamePlaceholder')"
                class="w-full"
              />
              <Button :label="t('controls.submit')" type="submit" class="w-full" />
              <div v-if="formErrors.length" class="text-sm text-rose-400">
                <ul class="list-disc pl-5">
                  <li v-for="err in formErrors" :key="err">{{ err }}</li>
                </ul>
              </div>
            </form>
          </template>
        </Card>
      </section>

      <section class="mt-6 grid gap-6 lg:grid-cols-3">
        <Card class="lg:col-span-2">
          <template #title>Dummy data</template>
          <template #content>
            <ul class="divide-y divide-slate-800">
              <li
                v-for="item in items"
                :key="item.id"
                class="py-3 flex items-center justify-between"
              >
                <span class="font-medium text-slate-100">{{ item.name }}</span>
                <span class="text-xs text-slate-400">ID: {{ item.id }}</span>
              </li>
            </ul>
          </template>
        </Card>

        <Card>
          <template #title>Comandos rápidos</template>
          <template #content>
            <ul class="space-y-2 text-sm text-slate-200">
              <li
                class="flex items-center justify-between rounded border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <span>Desarrollo</span>
                <code class="text-xs text-emerald-200">npm run dev</code>
              </li>
              <li
                class="flex items-center justify-between rounded border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <span>E2E</span>
                <code class="text-xs text-sky-200">npx playwright test</code>
              </li>
              <li
                class="flex items-center justify-between rounded border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <span>Lint</span>
                <code class="text-xs text-indigo-200">npm run lint</code>
              </li>
              <li
                class="flex items-center justify-between rounded border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <span>Build</span>
                <code class="text-xs text-amber-200">npm run build</code>
              </li>
            </ul>
          </template>
        </Card>
      </section>

      <Dialog v-model:visible="dialogVisible" :header="t('controls.dialogHeader')">
        <p class="mb-4">{{ t("controls.dialogText") }}</p>
        <Button :label="t('controls.close')" @click="dialogVisible = false" />
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useCounterStore } from "@/stores/counter";
import { useForm } from "vee-validate";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import { getDummyItems, DummyItem } from "@/domain/dummy/services/dummyService";
import { onMounted } from "vue";

const store = useCounterStore();
const inc = () => store.increment();
const count = computed(() => store.count);

const { t } = useI18n();

const name = ref("");
const subscribed = ref(false);
const dialogVisible = ref(false);

// vee-validate form (light example)
const formName = ref("");
const formErrors = ref([]);

const items = ref<DummyItem[]>([]);

const { handleSubmit } = useForm();

onMounted(async () => {
  try {
    items.value = await getDummyItems();
  } catch (err) {
    // errors handled globally by axios interceptor and eventBus
    console.error("failed to fetch dummy items", err);
  }
});

const submitForm = handleSubmit(() => {
  formErrors.value = [];
  if (!formName.value) {
    formErrors.value.push(t("controls.formNameRequired"));
    return;
  }
  // Example success
  console.log(`Form submitted: ${formName.value}`);
});
</script>

<style scoped>
/* Scoped styles here */
</style>
