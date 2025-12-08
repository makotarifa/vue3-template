<template>
  <div class="border p-4 rounded">
    <h3 class="font-semibold">Dummy: {{ item.name }}</h3>
    <p class="text-sm text-gray-600">ID: {{ item.id }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ item: { name: string; id: string | number } }>();
</script>
