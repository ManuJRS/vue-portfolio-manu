<script setup>
const props = defineProps({
  roleLabel: {
    type: String,
    default: 'Mi papel'
  },
  roleText: {
    type: String,
    default: ''
  },

  stackLabel: {
    type: String,
    default: 'Tecnología utilizada'
  },
  stackText: {
    type: String,
    default: ''
  },

  timeLabel: {
    type: String,
    default: 'Tiempo total'
  },
  timeText: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <div class="text-center my-5 description-row">

    <!-- Tres columnas -->
    <div class="row my-5">
      <div class="col-12 col-sm-4 my-2">
        <h2 class="h5 text-white mb-2 title-description roboto-mono-bold">
          {{ roleLabel }}
        </h2>
        <p class="colp roboto-mono">
          {{ roleText }}
        </p>
      </div>

      <div class="col-12 col-sm-4 my-2">
        <h2 class="h5 text-white mb-2 title-description roboto-mono-bold">
          {{ stackLabel }}
        </h2>
        <p class="colp roboto-mono">
          {{ stackText }}
        </p>
      </div>

      <div class="col-12 col-sm-4 my-2">
        <h2 class="h5 text-white mb-2 title-description roboto-mono-bold">
          {{ timeLabel }}
        </h2>
        <p class="colp roboto-mono">
          {{ timeText }}
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.description-row {
  max-width: 900px;
  margin: 0 auto;
}

.title-description {
  font-size: 2rem;
  font-weight: 600;
}

.colp {
  color: #f0f0f0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.description-card {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, 0.05);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.67);
  padding: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-mono-bold {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #fff;
}

.roboto-mono {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  color: #fff;
}

@media (max-width: 768px) {
.title-description {
  font-size: 1.7rem;
  font-weight: 600;
}
}
</style>
