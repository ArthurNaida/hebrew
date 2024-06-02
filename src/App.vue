<template>
  <h-home/>
</template>

<script>
import HHome from './components/HHome.vue'

export default {
  name: 'App',
  components: {
    HHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  --main-white: var(--bs-light);
  --main-dark: var(--bs-gray-dark);
  width: 100vw;
  height: 100vh;
  --layout-bg-color: #00308F; 
  background-color: var(--layout-bg-color);
}
</style>
