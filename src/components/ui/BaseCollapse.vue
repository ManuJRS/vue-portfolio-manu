<script setup>
import { ref } from 'vue';

const open = ref(false)
const props = defineProps ({
    id: {
        type: String,
        default: 'base-collapse'
    },
    buttonTextClosed: {
        type: String,
        default: '@'
    },
    buttonTextOpen: {
        type: String,
        default: '@'
    },
    variant: {
        type: String,
        default: 'default'
    }
})
</script>

<template>
  <div>
    <button
      v-bind:class="['btn btn-primary mb-2', variant === 'round' ? 'btn-round' : 'btn-primary']"
      type="button"
      v-bind:aria-expanded="open ? 'true' : 'false'"
      v-bind:aria-controls="id"
      v-on:click="open = !open"
    >
      {{ open ? buttonTextOpen : buttonTextClosed }}
    </button>

    <b-collapse v-model="open" :id="id">
      <div class="collapse-content mt-3">
        <slot>
            <a href="#" class="collapse-link">Enlace 1</a>
            <a href="#" class="collapse-link">Enlace 2</a>
        </slot>
    </div>
    </b-collapse>
  </div>
</template>

<style scoped>
.btn-round {
  background-color: transparent;
  color: white;
  border: 1px solid #0d6efd;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
}

.btn-round:hover {
  background-color: rgba(13, 110, 253, 0.2);
}
</style>