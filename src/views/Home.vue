<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
    <div
      class="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 mx-auto mt-8"
    >
      <div
        class="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-gray-700"
      >
        <!-- Title and language controls are now in header -->
        <div class="mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
          <p class="text-center text-lg text-gray-700 dark:text-gray-300">
            {{ t("app.subtitle") }}
          </p>
        </div>
      </div>
      <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">{{ t("app.tailwindInfo") }}</p>
      <div class="flex gap-3 items-center mb-4">
        <Button :label="t('controls.increment')" icon="pi pi-plus" @click="inc" />
        <span class="px-3 py-2 rounded border">{{ t("controls.count") }}: {{ count }}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-red-500">
        <Card>
          <template #title>{{ t("controls.primevueControls") }}</template>
          <template #content>
            <div class="space-y-3">
              <InputText
                v-model="name"
                :placeholder="t('controls.namePlaceholder')"
                class="w-full"
              />
              <div class="flex items-center gap-4">
                <Checkbox v-model="subscribed" input-id="subscribe" binary />
                <label for="subscribe">{{ t("controls.subscribe") }}</label>
              </div>
              <div class="flex gap-3">
                <Button :label="t('controls.openDialog')" @click="dialogVisible = true" />
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
              <div>
                <Button :label="t('controls.submit')" type="submit" />
              </div>
              <div v-if="formErrors.length" class="text-sm text-red-500">
                <ul>
                  <li v-for="err in formErrors" :key="err">{{ err }}</li>
                </ul>
              </div>
            </form>
          </template>
        </Card>
      </div>

      <section class="mt-6">
        <h3 class="text-xl font-semibold mb-2">Dummy data</h3>
        <ul>
          <li v-for="item in items" :key="item.id" class="py-2 border-b">
            {{ item.name }} ({{ item.id }})
          </li>
        </ul>
      </section>

      <Dialog v-model:visible="dialogVisible" :header="t('controls.dialogHeader')">
        <p>{{ t("controls.dialogText") }}</p>
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
