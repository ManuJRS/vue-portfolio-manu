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

        <div v-if="loading" class="skeleton-wrapper">
          <div class="sk-title mb-3"></div>
          <div class="sk-line mb-2"></div>
          <div class="sk-line mb-2"></div>
          <div class="sk-line short mb-3"></div>
          <div class="sk-rect"></div>
          <div class="sk-rect-b"></div>
        </div>
        <div v-if="loading">
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

.sk-rect-b {
  margin-top: 40px !important;
  height: 420px;
  width: 90%;
  border-radius: 8px;
    background: linear-gradient(90deg, #333 25%, #444 37%, #333 63%);
  background-size: 400% 100%;
  border-radius: 4px;
  animation: shimmer 1.4s ease infinite;
}

.sk-rect {
  margin-top: 12px;
  height: 420px;
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
.sk-rect
.sk-rect {
  margin-top: 12px;
  height: 220px;
  width: 100%;
  border-radius: 8px;
}
  
}
</style>
