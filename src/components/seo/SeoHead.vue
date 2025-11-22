<script setup>
import { useHead } from '@vueuse/head'

const props = defineProps({
  title: {
    type: String,
    default: 'ManuDev'
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  noIndex: {
    type: Boolean,
    default: false
  }
})

const siteName = 'ManuDev'

useHead(() => {
  const fullTitle = props.title ? `${props.title} | ${siteName}` : siteName

  const meta = [
    {
      name: 'description',
      content: props.description || ''
    },
    {
      property: 'og:title',
      content: fullTitle
    },
    {
      property: 'og:description',
      content: props.description || ''
    },
    props.image
      ? {
          property: 'og:image',
          content: props.image
        }
      : null,
    {
      property: 'og:type',
      content: 'website'
    },
    props.noIndex
      ? { name: 'robots', content: 'noindex, nofollow' }
      : { name: 'robots', content: 'index, follow' }
  ].filter(Boolean)

  return {
    title: fullTitle,
    meta
  }
})
</script>

<template>
  <!-- No muestra nada; solo afecta el <head> -->
  <span style="display: none;"></span>
</template>
