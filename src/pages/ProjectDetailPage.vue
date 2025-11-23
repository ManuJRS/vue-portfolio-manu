<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectDetail } from '@/composables/useProjectDetail'
import DynamicSectionRenderer from '@/components/dynamic/DynamicSectionRenderer.vue'
import { useSeo } from '@/composables/useSeo'
import SeoHead from '@/components/seo/SeoHead.vue'


const route = useRoute()
const slug = computed(() => route.params.slug)
const { project, loading, error } = useProjectDetail(slug)

const { seoProps } = useSeo(project, {
  fallbackTitle: (p) =>
    p?.title ||
    p?.Title ||
    p?.attributes?.title ||
    p?.attributes?.Title ||
    'Proyecto'
})

</script>

<template>
  <SeoHead v-bind="seoProps" />

  <b-container fluid class="container-project">
    <b-row class="justify-content-center py-4 text-white">
      <b-col cols="12" sm="8" class="text-center">

        <div v-if="loading" class="skeleton-wrapper">
          <div class="sk-title mb-3"></div>
          <div class="sk-line mb-2"></div>
          <div class="sk-line mb-2"></div>
          <div class="sk-line short mb-3"></div>
          <div class="sk-rect"></div>
        </div>

        <div v-else-if="error">
          {{ error }}
        </div>

        <div v-else-if="project && project.componentes && project.componentes.length">
          <DynamicSectionRenderer
            v-for="(section, index) in project.componentes"
            :key="section.id || index"
            :section="section"
          />
        </div>

        <p v-else>
          No hay contenido para este proyecto.
        </p>

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

.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center; 
  width: 100%;
  text-align: center;
}

.sk-title,
.sk-line,
.sk-rect {
  background: linear-gradient(90deg, #333 25%, #444 37%, #333 63%);
  background-size: 400% 100%;
  border-radius: 4px;
  animation: shimmer 1.4s ease infinite;
  
}

.sk-title {
  height: 22px;
  width: 60%;
  margin-top: 50px !important;
  margin-bottom: 30px !important;

}

.sk-line {
  height: 14px;
  width: 100%;

}

.sk-line.short {
  width: 40%;
  margin-bottom: 80px !important;
}

.sk-rect {
  margin-top: 12px;
  height: 620px;
  width: 90%;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (max-width: 768px) {
.sk-title {
  height: 22px;
  width: 60%;
  margin-top: 50px !important;
  margin-bottom: 30px !important;

}
.sk-rect {
  margin-top: 12px;
  height: 220px;
  width: 100%;
  border-radius: 8px;
}
  
}
</style>
