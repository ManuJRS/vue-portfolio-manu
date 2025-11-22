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

    <h1 class="mb-3 title-info">{{ title }}</h1>
    <p class="lead textinfo"><i>{{ text }}</i></p>
  </div>
</template>

<style scoped>
.title-info {
  font-size: clamp(1.4rem, 0.8rem + 1.3vw, 2rem);
}

.textinfo {
  font-size: 16px;
}

.info-image-wrapper {
  width: 100%;
  height: 1000px;
  border-radius: 12px;
  overflow: hidden;
  border: #5a5959 2px solid;
    background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, 0.05);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.67);
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
