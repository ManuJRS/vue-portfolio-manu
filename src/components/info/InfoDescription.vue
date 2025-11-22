<script setup>
const props = defineProps({
  title: String,
  text: String
});
</script>

<template>
  <div class="mt-4">
    <h3 class="mb-2 title-desc">{{ title }}</h3>
    <p class="text-desc">{{ text }}</p>
  </div>
</template>

<style scoped>
.title-desc {
    font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: clamp(1.4rem, 1.2rem + 2vw, 2.2rem);
  color: #fff !important;
}

.text-desc {
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 16px;
}
</style>
