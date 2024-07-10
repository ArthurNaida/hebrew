<template>
    <carousel 
    :items-to-show="1.8" 
    :wrap-around="true"
    :transition="500"
    :snap-align="'center'" 
    :style="'width: inherit'">
      <!-- <h-border> -->
      <slide v-for="slide in 10" :key="slide">
        <h-border>
          <div class="carousel__item">{{ slide }}</div>
        </h-border>
      </slide>
    <!-- </h-border> -->
      <template #slides>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>
  
  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import HBorder from './HBorder.vue'
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
      HBorder
    },
  }
  </script>
  

<style>
@media (max-width: 576px) {
  .carousel__item {
    min-width: 20vw;
  }
}
@media (min-width: 576px) {
  .carousel__item {
    min-width: 200px;
  }
}

.carousel__item {
  min-height: 200px;
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
</style>