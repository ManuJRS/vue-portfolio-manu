<script setup>
import SectionWithCollapse from '@/components/sections/SectionWithCollapse.vue';
</script>

<template>
  <b-container fluid>
    <b-row class="justify-content-center vh-100 my-4">
      <b-col cols="0" sm="2" class="text-center">
        <h2>container</h2>
      </b-col>
      <b-col cols="12" sm="8" class="text-center">
        <SectionWithCollapse
        h2="¡Hola!, Soy Manu"
        h1="Ingeniero de software"
        :h1Uppercase="true"
        h1Font="anton"
        h3="Desarrollador Frontend - WebMaster - Palace Resorts / Baglioni ITA"
        >
        </SectionWithCollapse>
      </b-col>
      <b-col cols="0" sm="2" class="text-center">
        <h2>container</h2>
      </b-col>
    </b-row>
  </b-container>
</template>