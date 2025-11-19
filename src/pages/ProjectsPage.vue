<script setup>
import SectionWithCollapse from '@/components/sections/SectionWithCollapse.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import SectionProjectCard from '../components/sections/SectionProjectCard.vue';

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
        h1="Desarrollador Web"
        :h1Uppercase="true"
        h1Font="anton"
        h3="WebMaster - Palace Resorts / Baglioni ITA"
        >
        </SectionWithCollapse>
        <div class="text-center">
          <BaseIcon />
        </div>
        <SectionProjectCard
  link="/proyectos/movie-manager"
  title="Movie Manager"
  intro="Gestor de películas."
  text="Migrado de React a Vue + servicios."
  externalLink="https://res.cloudinary.com/dronteu5m/image/upload/v1740847346/manu%20portafolio/HOME/iyvno1ocjro6yj6ud9lz.png"
  font="anton"
> </SectionProjectCard>

        <SectionProjectCard
  link="/proyectos/movie-manager"
  title="Movie Manager"
  intro="Gestor de películas."
  text="Migrado de React a Vue + servicios."
  externalLink="https://res.cloudinary.com/dronteu5m/image/upload/v1740847346/manu%20portafolio/HOME/iyvno1ocjro6yj6ud9lz.png"
  font="anton"
> </SectionProjectCard>

      </b-col>
      <b-col cols="0" sm="2" class="text-center">
        <h2>container</h2>
      </b-col>
    </b-row>
  </b-container>
</template>