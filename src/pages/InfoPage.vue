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
  // si en tu Single Type el campo se llamara distinto,
  // por ejemplo "seoInfo", usar:
  // seoKey: 'seoInfo'
})
</script>

<template>
  <SeoHead v-bind="seoProps" />
  <b-container fluid class="content-info">
    <b-row class="justify-content-center my-4">
      <b-col cols="12" md="10" lg="8" class="text-white">

        <div v-if="loading" class="state-center">
          Cargando pagina...
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
</style>
