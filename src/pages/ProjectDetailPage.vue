<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProjectBySlug } from '@/services/api';

// opcional, si ya lo tienes
import BaseHeading from '@/components/ui/BaseHeading.vue';

// tu renderer dinámico (ajusta la ruta si es distinta)
import DynamicSectionRenderer from '@/components/dynamic/DynamicSectionRenderer.vue';

const route = useRoute();
const project = ref(null);
const loading = ref(true);
const error = ref('');

async function loadProject() {
  loading.value = true;
  error.value = '';
  project.value = null;

  try {
    const data = await fetchProjectBySlug(route.params.slug);

    if (!data) {
      error.value = 'Proyecto no encontrado';
    } else {
      project.value = data;
    }
  } catch (err) {
    console.error(err);
    error.value = 'Error al cargar el proyecto';
  } finally {
    loading.value = false;
  }
}

onMounted(loadProject);

watch(
  () => route.params.slug,
  () => loadProject()
);
</script>

<template>
  <main class="container py-4 text-white">
    <!-- Loading -->
    <div v-if="loading">
      Cargando proyecto...
    </div>

    <!-- Error -->
    <div v-else-if="error">
      {{ error }}
    </div>

    <!-- Contenido del proyecto -->
    <div v-else-if="project">
      <!-- Título principal del proyecto (puedes quitar esto si lo manejas como sección) -->
      <BaseHeading
        v-if="project.title"
        :level="1"
        :text="project.title"
        font="anton"
        :uppercase="false"
        class="mb-4"
      />

      <!-- Dynamic Zone del proyecto -->
<section v-if="project.componentes && project.componentes.length">
  <DynamicSectionRenderer
    v-for="(section, index) in project.componentes"
    :key="section.id || index"
    :section="section"
  />
</section>

      <!-- Debug opcional al inicio -->
      <!--
      <pre class="mt-4">
{{ project }}
      </pre>
      -->
    </div>
  </main>
</template>
