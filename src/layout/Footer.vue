<script setup>
const currentYear = new Date().getFullYear()

const props = defineProps ({
    text: {
        type: String,
        default: 'Desarrollado por ManuDev',
        requiered: true
    }
})
</script>

<template>
  <footer class="footer">
    <p class="roboto-mono" >{{ text }} {{ currentYear }}</p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: left;
  padding-left: 20px;
  color: #ffffff;
  opacity: 0.7;
  font-size: 0.9rem;
  margin-top: 50px;
}

.roboto-mono {
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 0.9rem;
  letter-spacing: 1px;
}
</style>
