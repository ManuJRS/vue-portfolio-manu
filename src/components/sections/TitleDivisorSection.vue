<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="text-center my-5">
    <h2
      v-if="title"
      class="text-white mb-3 title-text anton-regular"
    >
      {{ title }}
    </h2>

    <div class="divisor-line mx-auto"></div>
  </div>
</template>

<style scoped>

.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: 1.75rem;
  font-style: normal;
  letter-spacing: 2px;
}


.divisor-line {
  width: 100%;
  max-width: 1000px;
  height: 2px;
  border: 2px solid #5a5959;
  border-radius: 10px;
  background-color: rgba(187, 183, 183, 0.04);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.67);
  outline: 1px solid rgba(242, 242, 242, 0.05);
}

@media (max-width: 768px) {
.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-size: calc(1.3rem + .6vw);
  font-style: normal;
  letter-spacing: 2px;
}
}
</style>
