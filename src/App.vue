<template>
  <h-home/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import HHome from './components/HHome.vue';

export default defineComponent({
  name: 'App',
  components: {
    HHome
  }
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  --main-white: var(--bs-light);
  --main-dark: var(--bs-gray-dark);
  width: 100vw;
  height: 100vh;
}
body {

  --layout-bg-color: #00308F; 
  background-color: var(--layout-bg-color) !important;
}
</style>
