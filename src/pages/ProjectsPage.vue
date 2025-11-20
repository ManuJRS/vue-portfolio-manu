<script setup>
import { useHomePage } from '@/composables/useHomePage'
import DynamicSectionRenderer from '@/components/dynamic/DynamicSectionRenderer.vue'

const { home, loading, error } = useHomePage()
</script>

<template>
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
