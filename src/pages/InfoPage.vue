<script setup>
import { ref, onMounted } from 'vue';
import { fetchInfo } from '@/services/api';

const info = ref(null);
const loading = ref(true);
const error = ref('');

const getMediaUrl = (file) => {
  if (!file) return '';
  const baseUrl = import.meta.env.VITE_STRAPI_URL || '';
  const url =
    file.formats?.medium?.url ||
    file.formats?.small?.url ||
    file.formats?.thumbnail?.url ||
    file.url;

  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${baseUrl}${url}`;
};

onMounted(async () => {
  try {
    info.value = await fetchInfo();
  } catch (e) {
    console.error(e);
    error.value = 'Error al cargar la página de información';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main class="container py-5 text-white">
    <div v-if="loading" class="text-center my-5">
      Cargando información...
    </div>

    <div v-else-if="error" class="text-center my-5">
      {{ error }}
    </div>

    <div v-else-if="info">
      <div class="row">
        <!-- Columna izquierda: imginfo + intro -->
        <div class="col-12 col-md-6 mb-4">
          <div v-if="info.imginfo" class="mb-4 info-image-wrappe">
            <img
              :src="getMediaUrl(info.imginfo)"
              alt="Foto info"
              class="info-main-image rounded"
            />
          </div>

          <h1 class="mb-3">{{ info.titleintro }}</h1>
          <p class="lead">{{ info.textintro }}</p>

          <div class="mt-4">
            <h3 class="mb-2">{{ info.titledescription }}</h3>
            <p>{{ info.textdescription }}</p>
          </div>
        </div>

        <!-- Columna derecha: habilidades con icono -->
        <div class="col-12 col-md-6 mb-4">
          <h2 class="mb-3">{{ info.titlelist }}</h2>

          <div class="skills-card p-3">
            <div
              v-for="hab in info.hability"
              :key="hab.id"
              class="d-flex align-items-center mb-3 skill-item"
            >
              <img
                v-if="hab.imageicon"
                :src="getMediaUrl(hab.imageicon)"
                :alt="hab.texticon"
                class="skill-icon me-3"
              />
              <span class="skill-text">{{ hab.texticon }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Debug opcional mientras lo ajustas -->
      <!--
      <pre class="mt-5">
{{ info }}
      </pre>
      -->
    </div>
  </main>
</template>

<style scoped>
.info-image-wrapper {
  width: 100%;
  height: 420px; /* puedes cambiar este valor */
  border-radius: 12px;
  overflow: hidden;
}

.info-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* clave: cubre todo sin deformarse */
  display: block;
}

.skills-card {
  border: #5a5959 2px solid;
  border-radius: 10px;
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, 0.05);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.67);
}

.skill-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.skill-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 0.35rem;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-text {
  font-size: 0.98rem;
}
</style>
