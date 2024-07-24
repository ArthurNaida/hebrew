<template>
<div class="border-container container">
    <slot></slot>
</div>
</template>

<style scoped>
.border-container {
    background-color: var(--main-white);
    color: var(--main-dark);
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    height: fit-content;
    width: fit-content;
}
</style>