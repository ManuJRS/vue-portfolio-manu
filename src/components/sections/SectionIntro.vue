<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: Number, default: 1 },
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
    <div class="description-box">
<p class="fs-5 text-white-50 roboto-mono description-box">
      {{ description }}
    </p>
    </div>
  </div>
</template>

<style scoped>
.description-box {
  max-width: 950px;
  margin: 0 auto;
}
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
  font-size: 16px !important;
  color: #fff !important;
}
</style>
