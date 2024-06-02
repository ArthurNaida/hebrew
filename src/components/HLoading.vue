<template>
<!-- <h-border class="relative"> -->
    <VueLoading class="spinner"
    :active="true" 
    :is-full-page="false" 
    :z-index="99"
    :color="'var(--main-white)'"
    :opacity="0">
    </VueLoading>
<!-- </h-border> -->
</template>

<script>
import VueLoading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
// import HBorder from './HBorder.vue';
export default {
name: 'h-loading',
components: {VueLoading},
props: {
    active: Boolean
}
}
</script>

<style scoped>
.relative {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 300px;
}
</style>