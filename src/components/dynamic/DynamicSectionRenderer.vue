<script setup>
import SectionWithCollapse from '@/components/sections/SectionWithCollapse.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import BaseProjectCard from '@/components/sections/SectionProjectCard.vue'
import SectionIntro from '@/components/sections/SectionIntro.vue'
import TitleDivisorSection from '@/components/sections/TitleDivisorSection.vue'

const props = defineProps({
  section: {
    type: Object,
    required: true
  }
})


const isContentIntro = (s) => s.__component === 'components.content-intro'
const isIconArrow = (s) => s.__component === 'components.incon-arrrow'
const isCardPreview = (s) => s.__component === 'components.card-preview'
const isIntroProject = (s) => s.__component === 'components.intro-project'
const isTitleDivisor = (s) => s.__component === 'components.title-divisor';



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

const mapLevel = (level) => {
  if (level === 'h1') return 1
  if (level === 'h2') return 2
  if (level === 'h3') return 3
  return 2 // default h2
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
  :slug="section.project?.slug"
  :link="section.link"
  :title="section.title"
  :intro="section.intro"
  :text="section.text"
  :external-link="getImageUrl(section)"
  :font="section.font"
  :card-layout="section.cardLayout || 'extended'"
  :image-fit="section.imageFit || 'cover'"
/>

  <SectionIntro
    v-else-if="isIntroProject(section)"
    :title="section.titleIntro"
    :description="section.textIntro"
    :level="mapLevel(section.level)"
    :uppercase="section.uppercase ?? false"
  />

<TitleDivisorSection
  v-else-if="isTitleDivisor(section)"
  :title="section.titleDivisor"
/>
  

  <div v-else class="my-4">
    <p>
      El render no funciona para:
      <strong>{{ section.__component }}</strong>
    </p>
  </div>
</template>
