<template>
<h-border>
    <div class="root-container">
        <h2>Введите корень слова на иврите</h2>
        <form @submit.prevent="onSubmitRoot">
          <div class="root-input">
            <input v-model="letters.letter3" pattern="[א-ת]" maxlength="1" size="1" required>
            <h1>.</h1>
            <input v-model="letters.letter2" pattern="[א-ת]" maxlength="1" size="1" required>
            <h1>.</h1>
            <input v-model="letters.letter1" pattern="[א-ת]" maxlength="1" size="1" required>
          </div>
          <h-submit class="submit" :value="'Найти'"></h-submit>
        </form> 
      </div>
</h-border>
</template>

<script setup lang="ts">
import { Letters } from '@/main';
import HBorder from './HBorder.vue';
import HSubmit from './HSubmit.vue';
import { defineEmits } from 'vue';

const letters: Letters = {
    letter1: '',
    letter2: '',
    letter3: ''
}
const emit = defineEmits<{
    submitRoot: [val: Letters]
}>()

const onSubmitRoot: any = () => {
    emit('submitRoot', letters)
}
</script>

<style scoped>
input {
    border: 0;
    border-bottom: 2px solid #000;
    font-size: 56px;
    width: 1em;
    background: var(--main-white);
}
input:focus-visible {
    border: 0;
}
.root-input {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
}
.root-input > h1 {
    width: 20px;
    display: block;
}
.submit {
    cursor: pointer;
    margin-top: 20px;
}
</style>