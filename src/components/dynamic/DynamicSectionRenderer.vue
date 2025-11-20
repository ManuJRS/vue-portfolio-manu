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

console.log('section.h1Uppercase →', props.section.h1Uppercase)


const isContentIntro = (s) => s.__component === 'components.content-intro'
const isIconArrow = (s) => s.__component === 'components.incon-arrrow'
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
    v-else-if="section.__component === 'components.section-project-card'"
    :link="section.link"
    :title="section.title"
    :intro="section.intro"
    :text="section.text"

    :font="section.font"
  />

  <div v-else class="my-4">
    <p>
      Zona dinámica no soportada todavía:
      <strong>{{ section.__component }}</strong>
    </p>
  </div>
</template>
