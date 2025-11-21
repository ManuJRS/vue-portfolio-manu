<script setup>
import SectionWithCollapse from '@/components/sections/SectionWithCollapse.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import BaseProjectCard from '@/components/sections/SectionProjectCard.vue'


const props = defineProps({
  section: {
    type: Object,
    required: true
  }
})


const isContentIntro = (s) => s.__component === 'components.content-intro'
const isIconArrow = (s) => s.__component === 'components.incon-arrrow'
const isCardPreview = (s) => s.__component === 'components.card-preview'

const getImageUrl = (section) => {
  if (!section?.image) return ''

  const baseUrl = import.meta.env.VITE_STRAPI_URL || ''
  const formats = section.image.formats || {}
 const url =
    section.image.url ||
    formats.large?.url ||
    formats.medium?.url ||
    formats.small?.url ||
    formats.thumbnail?.url
if (!url) return ''
if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
    return `${baseUrl}${url}`
}
</script>

<template>

  <SectionWithCollapse
    v-if="isContentIntro(section)"
    :h2="section.titleh2"
    :h1="section.titleh1"
    :h3="section.titleh3"
    :showCollapse="section.showCollapse ?? true"
    :h1Uppercase="section.h1Uppercase ?? true"
  :h1Font="section.h1Font || 'anton'"
  :h3Font="section.h3Font || 'roboto-mono'"
    :externalLink="section.externalLink"
    collapseId="collapse-links"
    buttonClosed="@"
    buttonOpen="@"
  :links="[
    section.linkUrl1 && section.linkLabel1
      ? { label: section.linkLabel1, url: section.linkUrl1 }
      : null,
    section.linkUrl2 && section.linkLabel2
      ? { label: section.linkLabel2, url: section.linkUrl2 }
      : null
  ].filter(Boolean)"
  />

<div v-else-if="isIconArrow(section)" class="my-4">
  <BaseIcon :label="section.textArrow" />
</div>

<BaseProjectCard
  v-else-if="isCardPreview(section)"
  :link="section.link"
  :title="section.title"
  :intro="section.intro"
  :text="section.text"
  :external-link="getImageUrl(section)"
  :font="section.font"
  :card-layout="section.cardLayout || 'extended'"
  :image-fit="section.imageFit || 'cover'"
/>


  

  <div v-else class="my-4">
    <p>
      Zona dinámica no soportada todavía:
      <strong>{{ section.__component }}</strong>
    </p>
  </div>
</template>
