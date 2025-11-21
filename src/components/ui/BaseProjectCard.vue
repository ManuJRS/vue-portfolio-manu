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
  },
  cardLayout: {
    type: String,
    default: 'extended'
  },
  imageFit: {
    type: String,
    default: 'cover'
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

const cardClass = computed(() => {
  return props.cardLayout === 'collapse'
    ? 'Card-class-collapse'
    : 'Card-class-extended'
})

const imageClass = computed(() => {
  return props.imageFit === 'contain'
    ? 'Card-img-contain'
    : 'Card-img-cover'
})

</script>

<template>
  <BCard :class="['my-5', cardClass]">
    <BCardBody class="d-flex flex-column Card-body">
      <BCardTitle :class="['text-start', 'Card-title', titleFontClass]">
        <h2>{{ title }}</h2>
      </BCardTitle>

      <BCardText :class="['text-start', 'Card-text', textFontClass]">
        <strong :class="titleTextFontClass">{{ intro }}</strong>
        <span class="mx-1">//</span>
        <small>{{ text }}</small>
      </BCardText>

      <BCardImg
        v-if="externalLink"
        top
        :src="externalLink"
        alt=""
        :class="imageClass"
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

.Card-class-collapse,
.Card-class-extended {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.671);
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, .05);
  cursor: pointer;
  transition: background 0.5s ease, height 1s ease;
}

.Card-class-collapse {
  height: 25vh;
}

.Card-class-extended {
  height: 50vh;
}

.Card-class-extended:hover {
  height: 80vh;
  background: radial-gradient(
    circle,
    rgba(68, 160, 217, 0.171) 0%,
    rgba(21, 21, 21, 0.185) 100%
  );
}

.Card-class-collapse:hover {
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

.Card-img-cover {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: none; /* auto por defecto, puedes ajustar si quieres límite */
}

.Card-img-contain {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 500px;
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

  .Card-class-collapse,
  .Card-class-extended {
  border: #5a5959 2px solid;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.671);
  background-color: rgba(187, 183, 183, 0.04);
  outline: 1px solid rgba(242, 242, 242, .05);
  cursor: pointer;
  height: auto !important;
  transition: background 0.5s ease, height 1s ease;
}

  .Card-img-cover,
  .Card-img-contain {
    width: 100%;
    height: auto !important;
    object-fit: cover !important; /* o contain si quieres */
    max-height: none !important;
  }

  
}
</style>
