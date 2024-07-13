<template>
    <div class="layout-container container p-3 d-flex flex-column align-items-center w-100">
        <div class="layout-mask">

        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.layout-container {
    position: relative;
    overflow-y: scroll;
    overflow-x: visible;
}
</style>