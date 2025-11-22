<script setup>
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()

const isActive = (item) => route.path === item.path
</script>

<template>
  <nav class="nav" v-if="items.length">
    <RouterLink
      v-for="item in items"
      :key="item.id"
      :to="item.path"
      :class="['navitem', isActive(item) && 'is-active']"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  position: fixed;
  width: auto;
  overflow: hidden;
  background-color: #272626c9;
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0 20px;
  box-shadow: 0 10px 40px rgba(41, 42, 43, 0.8);
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
  z-index: 1000;
}

.navitem {
  color: #ffffff;
  padding: 20px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 7px;
  z-index: 1;
  position: relative;
}

.navitem::before {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 0;
  width: 50%;
  height: 5px;
  background-color: #dfe2ea;
  border-radius: 8px 8px 0 0;
  opacity: 0;
  transition: 0.3s;
}

.is-active::before {
  opacity: 1;
  background-color: #0c48ee;
  bottom: 0;
}

.navitem:not(.is-active):hover::before {
  opacity: 1;
  bottom: 0;
}

@media (max-width: 600px) {
  .nav {
    padding: 0 10px;
    transform: translateX(-50%) scale(1.1);
    bottom: 3%;
  }

  .navitem {
    padding: 14px 10px;
    font-size: 0.9rem;
    margin: 0 3px;
  }

  .navitem::before {
    height: 3px;
    width: 40%;
  }
}
</style>
