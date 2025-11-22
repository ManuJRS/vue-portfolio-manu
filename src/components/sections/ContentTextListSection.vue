<script setup>
const props = defineProps({
  description: {
    type: String,
    default: ''
  },
  showList: {
    type: Boolean,
    default: true
  },
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="text-center my-5">
    <div class="desc-list-card">
      <div class="desc-list-body d-flex flex-column align-items-start">
        <p
          v-if="description"
          class="text-description roboto-mono"
        >
          {{ description }}
        </p>
        <ul
          v-if="showList && items.length"
          class="text-description"
        >
          <li
            v-for="item in items"
            :key="item.id ?? item.bullet ?? item"
            class="mb-2 text-start roboto-mono"
          >
            {{ item.bullet ?? item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.desc-list-card {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, 0.05);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.67);
  padding: 1.5rem;
  max-width: 1050px;
  margin: 0 auto;
}

.roboto-mono {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}

.text-description {
  color: #f5f5f5;
  font-size: 1rem;
  line-height: 1.7;
  text-align: justify;
}

@media (max-width: 768px) {
  .text-description {
    text-align: left;
  }
}
</style>
