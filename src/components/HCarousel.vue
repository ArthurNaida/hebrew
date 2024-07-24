<template>
    <carousel 
    :items-to-show="1.5" 
    :wrap-around="true"
    :pause-autoplay-on-hover="false"
    :transition="200"
    :snap-align="'center'" 
    :style="'width: inherit'">
      <slide v-for="(word, index) in wordsByLang" :key="index">
        <h-border>
          <div class="carousel__item" @click="changeLang(word)">{{ word.currentLang === 'heb' ? word.heb : word.rus }}</div>
        </h-border>
      </slide>
      <template #addons="{ slidesCount }">
        <Navigation v-if="slidesCount > 1 && windowSize.width > 576" />
        <pagination v-if="slidesCount > 1 && windowSize.width > 576" />
      </template>
    </carousel>
  </template>
<script setup lang="ts">
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import HBorder from './HBorder.vue';
import { useWindowResize } from '@/hooks';
import { ref } from 'vue';
let windowSize = {
  width: window.innerWidth,
  height: window.innerHeight
}
useWindowResize(windowSize)

const store = useStore();
const {savedWords} = storeToRefs(store);

const wordsByLang = ref(savedWords.value.map((word) => {
  console.log(word)
  if (word.value !== undefined) {
    let heb = word.value.split('-')[0];
    let rus = word.value.split('-')[1];
    let currentLang = 'heb';
    
    return {heb, rus, currentLang};
  }
}))
function changeLang(word: {heb: string, rus: string, currentLang: 'heb' | 'rus'}) {
  word.currentLang = word.currentLang === 'heb' ? 'rus' : 'heb';
}
</script>
  

<style>
@media (max-width: 576px) {
  .carousel__item {
    min-width: 40vw;
  }
}
@media (min-width: 576px) {
  .carousel__item {
    min-width: 40vw;
  }
}

.carousel__item {
  min-height: 60vh;
  background-color: var(--main-white);
  color: var(--main-dark);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 40px;
  opacity: 0.4;
}
.carousel__viewport {
  perspective: 2000px;
}
.carousel__slide--active{
  opacity: 1;
}
.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel.is-dragging {
  touch-action: auto;
}
</style>