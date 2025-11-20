<script setup>
import BaseCollapse from '@/components/ui/BaseCollapse.vue';
import BaseHeading from '@/components/ui/BaseHeading.vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    h2: {
        type: String,
        default: 'Hola soy h2'
    },
    h1: {
        type: String,
        default: 'Hola soy h1'
    },
    h3: {
        type: String,
        default: 'Hola soy h2'
    },
    h3Font: {
        type:String,
        default: 'roboto-mono'
    },
    h1Uppercase: {
        type: Boolean,
        default: true
    },
    h1Font: {
        type:String,
        default:'anton'
    },
    collapseId: {
        type: String,
        default: 'section-links'
    },
    buttonClosed: {
        type: String,
        default: '@'
    },
    buttonOpen: {
        type: String,
        default: '@'
    },
      showCollapse: {
    type: Boolean,
    default: true
  },
    links:{
      type: Array,
      default: () =>[],
    }
})
</script>

<template>
    <section class="section-wrap">
        <BaseHeading
        v-bind:level="2"
        v-bind:text="h2"
        />
        <BaseHeading
        v-bind:level="1"
        v-bind:text="h1"
        v-bind:uppercase="h1Uppercase"
        v-bind:font="h1Font"
        />
        <BaseHeading
        v-bind:level="3"
        v-bind:text="h3"
        v-bind:font="h3Font"
        />
        <BaseCollapse
      v-if="showCollapse && links.length"
      :id="collapseId"
      :buttonTextClosed="buttonClosed"
      :buttonTextOpen="buttonOpen"
      variant="round"
    >
      <div class="links-col">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          class="collapse-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
          <Icon icon="streamline-sharp:link-share-2" width="18" height="18" />
        </a>
        
      </div>
    </BaseCollapse>
    </section>
</template>

<style scoped>
.links-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
}
.collapse-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  font-weight: 400;
  transition: all .3s ease;
}
.collapse-link:hover {
  color: #0d6efd;
  text-decoration: none;
}

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
</style>