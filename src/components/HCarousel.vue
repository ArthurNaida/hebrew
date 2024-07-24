<template>
    <carousel 
    :items-to-show="1.5" 
    :wrap-around="true"
    :pause-autoplay-on-hover="false"
    :transition="200"
    :mouse-drag="false"
    :snap-align="'center'" 
    :style="'width: inherit'">
      <slot></slot>
      <template #addons="{ slidesCount }">
        <navigation v-if="slidesCount > 1 && windowSize.width > 576" />
        <pagination v-if="slidesCount > 1 && windowSize.width > 576" />
      </template>
    </carousel>
  </template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Navigation } from 'vue3-carousel';
import { useWindowResize } from '@/hooks';
let windowSize = {
  width: window.innerWidth,
  height: window.innerHeight
}
useWindowResize(windowSize)
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