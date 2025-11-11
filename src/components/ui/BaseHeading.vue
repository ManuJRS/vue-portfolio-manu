<script setup>
import { computed } from 'vue';

const props = defineProps ({
    level: {
        type: Number, default: 2
    },
    text: {
        type: String, required: true
    },
    uppercase: {
        type: Boolean,
        default: false
    },
    font: {
        type: String,
        default: ''
    }
})

const fontClass = computed(() => {
    if(props.font === 'anton') return 'anton-regular'
    if(props.font === 'roboto-mono') return 'roboto-mono'
})
</script>

<template>
    <component
        v-bind:is="`h${level}`"
        v-bind:class="[{'text-uppercase': uppercase},'mb-2', 'text-white', fontClass]"
    >
        {{ text }}
    </component>
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