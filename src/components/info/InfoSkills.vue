<script setup>
const props = defineProps({
  title: String,
  skills: Array,
  getMediaUrl: Function
});
</script>

<template>
  <div>
    <h2 class="mb-3 roboto-mono-skills">{{ title }}</h2>

    <div class="skills-card p-3">
      <div
        v-for="hab in skills"
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
</template>

<style scoped>
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
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 200;
  font-size: clamp(1.4rem, 0.8rem + 1.3vw, 1.5rem);
}
.roboto-mono-skills {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: clamp(1.4rem, 1.2rem + 2vw, 2.2rem);
  color: #fff !important;
}
</style>
