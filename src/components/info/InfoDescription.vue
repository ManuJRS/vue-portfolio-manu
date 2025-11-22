<script setup>
const props = defineProps({
  title: String,
  text: String
});
</script>

<template>
  <div class="mt-4">
    <h3 class="mb-2">{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>
