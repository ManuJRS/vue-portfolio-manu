<script setup>
import { computed } from 'vue';
import {
  BCard,
  BCardBody,
  BCardTitle,
  BCardText,
  BCardImg
} from 'bootstrap-vue-3'

const props = defineProps(
{
  title: String,
  intro: String,
  text: String,
  externalLink: String,
  titleFont: {
    type: String,
    default: 'anton'
  },
  textFont: {
    type: String,
    default: 'roboto-mono'
  }
}, 
)

const titleFontClass = computed(() => {
  if (props.titleFont === 'anton') return 'anton-regular'
  if (props.titleFont === 'roboto-mono') return 'roboto-mono'
  return ''
})

const textFontClass = computed(() => {
  if (props.textFont === 'anton') return 'anton-regular'
  if (props.textFont === 'roboto-mono') return 'roboto-mono'
  return ''
})

const titleTextFontClass = computed(() => {
  if (props.textFont === 'anton') return 'anton-regular'
  if (props.textFont === 'roboto-mono') return 'roboto-mono-title'
  return ''
})

</script>

<template>
  <BCard class="my-5 Card-class">
    <BCardBody class="d-flex flex-column Card-body">
      <BCardTitle  :class="['text-start', 'Card-title', titleFontClass]">
        <h2>{{ title }}</h2>
      </BCardTitle>

      <BCardText :class="['text-start', 'Card-text', textFontClass]">
        <strong :class="titleTextFontClass">{{ intro }}</strong>
        <span class="mx-1">//</span>
        <small>{{ text }}</small>
      </BCardText>

      <BCardImg
        top
        :src="externalLink"
        alt=""
      />
    </BCardBody>
  </BCard>
</template>

<style scoped>

.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-mono {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 1.25rem;
}

.roboto-mono-title {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 1.2rem;
}

.Card-class {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.671);
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, .05);
  cursor: pointer;
  height: 50vh;
  transition: background 0.5s ease, height 1s ease;
}

.Card-class:hover {
  height: 80vh;
  background: radial-gradient(
    circle,
    rgba(68, 160, 217, 0.171) 0%,
    rgba(21, 21, 21, 0.185) 100%
  );
}

.Card-body img {
  transform: translateY(150px);
  transition: transform 0.8s ease;
}

.Card-body:hover img {
  transform: translateY(0);
}

.Card-body strong {
  color: rgba(242, 242, 242, .8);
}

.Card-title {
  color: #f1f1f1;
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 2px;
}

.Card-text {
  color: #f1f1f1;
}

.nolink {
  text-decoration: none;
}

@media (max-width: 768px) {
  .Card-body img {
    transform: translateY(0);
  } 
    .Card-body:hover img {
    transform: translateY(0);
  }

  .Card-class {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.671);
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, .05);
  cursor: pointer;
  height: auto;
  transition: background 0.5s ease, height 1s ease;
}
  
}
</style>
