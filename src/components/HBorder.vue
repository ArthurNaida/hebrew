<template>
<div class="border-container">
    <slot></slot>
</div>
</template>

<script>
export default{
name: 'h-border'
}
</script>

<style scoped>
.border-container {
    background-color: var(--bs-light);
    color: var(--bs-gray-dark);
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    height: fit-content;
    width: fit-content;
}
</style>