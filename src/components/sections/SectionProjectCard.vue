<script setup>
import { RouterLink } from 'vue-router'
import BaseProjectCard from '@/components/ui/BaseProjectCard.vue'

const props = defineProps({
  link: {
    type: [String, Object],
    required: true
  },
  title: String,
  intro: String,
  text: String,
  externalLink: String,
  font: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <RouterLink
    class="nolink"
    :to="link"
  >
    <BaseProjectCard
      :title="title"
      :intro="intro"
      :text="text"
      :externalLink="externalLink"
        :font="font"
      />
  </RouterLink>
</template>

<style scoped>
.nolink {
  text-decoration: none;
}
</style>
