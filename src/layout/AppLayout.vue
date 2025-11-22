<script setup>
import { useLayout } from '@/composables/useLayout'
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/layout/Footer.vue';

const { navItems, footerText, loading, error } = useLayout()
</script>

<template>
  <div class="app-layout">
    <Navbar v-if="!loading && !error" :items="navItems" />

    <Navbar
      v-else-if="error"
      :items="[
        { id: 'fallback-1', label: 'Proyectos', path: '/' },
        { id: 'fallback-2', label: 'Info', path: '/info' }
      ]"
    />

    <main>
      <router-view />
    </main>
    <Footer :text="footerText"/>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
}
</style>
