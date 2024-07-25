<template>
    <div class="form-check form-switch position-fixed">
        <input class="form-check-input mt-0" type="checkbox" role="switch" id="flexSwitchCheckDefault"
        @click="onSwitch">
        <label class="form-check-label px-2 pt-1" for="flexSwitchCheckDefault"
            ><slot></slot>
        </label>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
    switchLang: []
}>();
const onSwitch: any = () => {
    emit('switchLang');
} 
</script>


<style scoped>
@media screen and (max-width: 576px) {
    .form-check {
        right: 15px;
        bottom: 4.5em;
    }
}
@media screen and (min-width: 576px) {
    .form-check {
        right: 25px;
    }
}
.form-check {
    background: var(--main-dark);
    border-radius: 1em;
    z-index: 9999;
}
.form-switch .form-check-input {
    --bs-form-switch-bg: url("data: image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
    width: 4em;
    height: 2em;
    background-color: var(--main-dark);    
}
.form-check-label {
    color: white;
}
</style>