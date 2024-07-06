<template>
<div class="container">
    <label :for="word.value">
        <div class="wrapper">
            <div class="bookmark">
                <CheckBox
                :id="word.value"
                :name="word.value"
                v-model:checked="checkOn"/>
            </div>
            <div class="word">{{word.value}}</div>
        </div>
    </label>
</div>
</template>

<script setup lang="ts">
import { Word } from '@/main';
import { defineProps } from 'vue';
import { ref } from 'vue';
import CheckBox from '@/components/HCheckBox.vue';

interface Props {
    word: Word
}
defineProps<Props>()

const checkOn = ref<boolean>(false)
</script>

<style scoped>
label {
    display: block;
}
.container {
    padding: 0;
    margin: 0;
}
.wrapper {
    display: flex;
    padding: 0;
    align-items: center;
    gap: 10px;
}
.word {
    padding: 5px 0px;
    margin: 0 auto;
}
.container:not(:last-child) {
    border-bottom: 1px solid #000;
}
</style>