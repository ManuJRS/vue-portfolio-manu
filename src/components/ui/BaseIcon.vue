<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

</script>

<template>
<div class="fetured-arrow">
    <h2 class="feture-arrow_label">{{text}}</h2>
<Icon class="feature-arrow_icon" icon="material-symbols:arrow-downward-rounded" width="32" height="32" />
</div>
</template>

<style scoped>
.featured-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.feture-arrow_label {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.feature-arrow_icon {
    animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

</style>