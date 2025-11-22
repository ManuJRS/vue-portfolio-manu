<script setup>
import { useHomePage } from '@/composables/useHomePage'
import { useSeo } from '@/composables/useSeo'
import DynamicSectionRenderer from '@/components/dynamic/DynamicSectionRenderer.vue'
import SeoHead from '@/components/seo/SeoHead.vue'

const { home, loading, error } = useHomePage()

// SEO para la página de proyectos (home)
const { seoProps } = useSeo(home, {
  fallbackTitle: 'Proyectos'
})
</script>

<template>
  <SeoHead v-bind="seoProps" />

  <b-container fluid class="content-home">
    <b-row class="justify-content-center my-4">
      <b-col cols="12" sm="8" class="text-center">
        <div v-if="loading">
          Cargando...
        </div>

        <div v-else-if="error">
          Error: {{ error }}
        </div>

        <template v-else-if="home">
          <DynamicSectionRenderer
            v-for="section in home.Sections"
            :key="section.id"
            :section="section"
          />
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.content-home {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
</style>
