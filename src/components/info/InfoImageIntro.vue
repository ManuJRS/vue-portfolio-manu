<script setup>
const props = defineProps({
  image: Object,
  title: String,
  text: String,
  getMediaUrl: Function
});
</script>

<template>
  <div>
    <div v-if="image" class="info-image-wrapper mb-4">
      <img :src="getMediaUrl(image)" alt="Foto info" class="info-main-image" />
    </div>

    <h1 class="mb-3">{{ title }}</h1>
    <p class="lead">{{ text }}</p>
  </div>
</template>

<style scoped>
.info-image-wrapper {
  width: 100%;
  height: 1000px;
  border-radius: 12px;
  overflow: hidden;
}
.info-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .info-image-wrapper {
    height: 550px;
  }
}
</style>
