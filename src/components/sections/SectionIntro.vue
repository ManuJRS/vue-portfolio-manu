<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: Number, default: 1 },     // 1=h1, 2=h2, 3=h3
  uppercase: { type: Boolean, default: false },
  font: { type: String, default: 'anton' }
});

const HeadingTag = computed(() => `h${props.level}`);

</script>

<template>
  <div class="text-center my-5">
    <component
      :is="HeadingTag"
      :class="[
        uppercase ? 'text-uppercase' : '',
        'anton-regular',
        'mb-3',
        'text-white'
      ]"
    >
      {{ title }}
    </component>

    <p class="fs-5 text-white-50 roboto-mono">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-mono {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 1.25rem;
}
</style>
