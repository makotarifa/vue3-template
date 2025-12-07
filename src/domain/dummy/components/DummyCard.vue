<template>
  <div class="border p-4 rounded">
    <h3 class="font-semibold">Dummy: {{ item.name }}</h3>
    <p class="text-sm text-gray-600">ID: {{ item.id }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { DummyItem } from "@/domain/dummy/services/dummyService";

const { item } = defineProps<{ item: DummyItem }>();
</script>

<style scoped></style>
