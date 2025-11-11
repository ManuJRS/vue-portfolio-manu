<script setup>
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
    }
})
</script>

<template>
    <component
        v-bind:is="`h${level}`"
        v-bind:class="[{'text-uppercase': uppercase},'mb-2', 'text-white']"
    >
        {{ text }}
    </component>
</template>