<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
   mediaUrl: { type: String, default: '' },
  altTitle: { type: String, default: '' },
  linkUrl: { type: String, default: '' },
  linkText: { type: String, default: '' }
});

const isVideo = (url) => {
  if (!url) return false;
  return url.endsWith('.mp4') ||
         url.endsWith('.webm') ||
         url.includes('youtube.com') ||
         url.includes('youtu.be') ||
         url.includes('vimeo.com');
};

const isClient = ref(false);
onMounted(() => {
  isClient.value = true;
});
</script>

<template>
  <div class="my-5 text-center">
    <div class="media-card">
      <!-- VIDEO -->
      <video
        v-if="isVideo(mediaUrl) && isClient"
        :src="mediaUrl"
        autoplay
        muted
        loop
        playsinline
        class="media-video"
      ></video>

      <!-- IMAGEN -->
      <img
        v-else-if="mediaUrl"
        :src="mediaUrl"
        :alt="altTitle"
        class="media-image"
      />

      <!-- FALLBACK -->
      <p v-else class="text-white p-3">Media no encontrada</p>

      <!-- LINK -->
      <div v-if="linkUrl" class="p-3">
        <a
          :href="linkUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="media-link"
        >
          {{ linkText || 'Ver más detalles' }}
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.media-card {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, .05);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.671);
  max-width: 1050px;
  width: calc(100% - 0.2rem);
  margin: 0 auto;
}

.media-video {
  width: 100%;
  height: auto;
  display: block;
  padding: 20px;
}

.media-image {
  width: 100%;
  height: auto;
  display: block;
  padding: 20px;
}

.media-link {
  color: #4da3ff;
  text-decoration: none;
  font-weight: 500;
}

.media-link:hover {
  color: #1e90ff;
}
</style>
