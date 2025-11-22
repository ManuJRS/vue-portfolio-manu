<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import BaseProjectCard from '@/components/ui/BaseProjectCard.vue';

const props = defineProps({
  slug: {
    type: String,
    default: ''
  },
  link: {
    type: [String, Object],
    default: null
  },
  title: String,
  intro: String,
  text: String,
  externalLink: String,
  cardLayout: {
    type: String,
    default: 'extended'
  },
  imageFit: {
    type: String,
    default: 'cover'
  }
});

const resolvedLink = computed(() => {
  if (props.slug) {
    return { name: 'project-detail', params: { slug: props.slug } };
  }

  return props.link || '/';
});
</script>

<template>
  <RouterLink
    class="nolink"
    :to="resolvedLink"
  >
    <BaseProjectCard
      :title="title"
      :intro="intro"
      :text="text"
      :external-link="externalLink"
      :card-layout="cardLayout"
      :image-fit="imageFit"
    />
  </RouterLink>
</template>

<style scoped>
.nolink {
  text-decoration: none;
}
</style>
