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
  color: var(--bs-light);
  width: 100vw;
  height: 100vh;
  --layout-bg-color: var(--bs-primary); 
  background-color: var(--layout-bg-color);
}
</style>
