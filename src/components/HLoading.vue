<template>
<div class="loading-parent" ref="parent">
    <VueLoading class="spinner"
    :active="true" 
    :is-full-page="false" 
    :z-index="99"
    :color="'var(--main-white)'"
    :opacity="0"
    :container="$refs.parent"
    >
    </VueLoading>
</div>
</template>

<script>
import VueLoading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

export default {
name: 'h-loading',
components: {VueLoading},
props: {
    active: Boolean
}
}
</script>

<style scoped>
.loading-parent {
    position: relative;
    width: 100px;
    margin: 0 auto;
    height: 100px;
}
</style>