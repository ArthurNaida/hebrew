<template>
  <div class="app-container vw-100 vh-100">
    <h-sidebar :titles="[
      'Поиск', 'Избранное', 'Практика'
    ]"/>
    <h-home/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HHome from './components/HHome.vue';
import HSidebar from '@/components/HSidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HHome, HSidebar
  }
});
</script>

<style>
.app-container {
  display: flex;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  --main-white: var(--bs-light);
  --main-dark: var(--bs-gray-dark);
}
body {
  --layout-bg-color: #00308F; 
  background-color: var(--layout-bg-color) !important;
}
</style>
