<template>
  <div class="app-container vw-100 vh-100">
    <h-sidebar :pages="[
      {title: 'Поиск', path: '/'},
      {title: 'Избранное', path: '/saved'},
      {title: 'Практика', path: '/practice'}
    ]"/>
    <h-layout>
      <RouterView/>
    </h-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HSidebar from '@/components/HSidebar.vue';
import HLayout from '@/components/HLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    HSidebar, HLayout
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
