<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectDetail } from '@/composables/useProjectDetail'
import DynamicSectionRenderer from '@/components/dynamic/DynamicSectionRenderer.vue'
const route = useRoute()
const slug = computed(() => route.params.slug)
const { project, loading, error } = useProjectDetail(slug)
</script>

<template>
  <b-container fluid class="container-project">
   <b-row class="justify-content-center py-4 text-white">
    <b-col cols="12" sm="8" class="text-center">
    <div v-if="loading">
      Cargando proyecto...
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>

    <div v-else-if="project">

<template v-if="project.componentes && project.componentes.length">
  <DynamicSectionRenderer
    v-for="(section, index) in project.componentes"
    :key="section.id || index"
    :section="section"
  />
</template>

    </div>
    </b-col>
  </b-row>
  </b-container>
</template>

<style scoped>
.container-project {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
</style>
