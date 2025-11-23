<script setup>
import { useInfoPage } from '@/composables/useInfoPage'
import InfoImageIntro from '@/components/info/InfoImageIntro.vue'
import InfoDescription from '@/components/info/InfoDescription.vue'
import InfoSkills from '@/components/info/InfoSkills.vue'
import { useSeo } from '@/composables/useSeo'
import SeoHead from '@/components/seo/SeoHead.vue'

const { info, loading, error, getMediaUrl } = useInfoPage()

const { seoProps } = useSeo(info, {
  fallbackTitle: 'Info'
})
</script>

<template>
  <SeoHead v-bind="seoProps" />
  <b-container fluid class="content-info">
    <b-row class="justify-content-center my-4">
      <b-col cols="12" md="10" lg="8" class="text-white">

<div v-if="loading" class="info-skeleton-wrapper">

  <div class="info-skeleton-grid">
    <div class="sk-card"></div>
    <div class="sk-card sk-card-2"></div>
  </div>

  <div class="info-skeleton-mobile-text">
    <div class="sk-line mb-2"></div>
    <div class="sk-line short mb-2"></div>
  </div>

</div>

        <div v-if="loading" class="state-center">
        </div>

        <div v-else-if="error" class="state-center">
          {{ error }}
        </div>

        <div v-else>
          <div class="row">
            <div class="col-12 col-md-6 mb-4">
              <InfoImageIntro
                :image="info.imginfo"
                :title="info.titleintro"
                :text="info.textintro"
                :getMediaUrl="getMediaUrl"
              />

              <InfoDescription
                :title="info.titledescription"
                :text="info.textdescription"
              />
            </div>

            <div class="col-12 col-md-6 mb-4">
              <InfoSkills
                :skills="info.hability"
                :title="info.titlelist"
                :getMediaUrl="getMediaUrl"
              />
            </div>
          </div>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.content-info {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.state-center {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* CONTENEDOR GENERAL */
.info-skeleton-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* GRID DE DOS COLUMNAS (desktop) */
.info-skeleton-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  margin-top: 40px;
}

/* CARD SKELETON */
.sk-card {
  height: 960px;
  border-radius: 12px;
  background: linear-gradient(90deg, #333 25%, #444 37%, #333 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
}


/* TEXTOS ABAJO (solo mobile) */
.info-skeleton-mobile-text {
  display: none;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  padding: 0 10px;
}

/* LÍNEAS DE TEXTO */
.sk-line {
  height: 14px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #333 25%, #444 37%, #333 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
}

.sk-line.short {
  width: 60%;
}

/* MOBILE */
@media (max-width: 768px) {
  .info-skeleton-grid {
    grid-template-columns: 1fr;
  }

  .sk-card {
  height: 500px;

}

  /* Solo 1 card visible en mobile */
  .sk-card-2 {
    display: none;
  }

  /* Activamos textos extra */
  .info-skeleton-mobile-text {
    display: flex;
  }
}

/* ANIMACIÓN */
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

</style>
