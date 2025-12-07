<template>
  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{{ label }}</span>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const { label } = defineProps<{ label: string }>();
</script>

<style scoped></style>
