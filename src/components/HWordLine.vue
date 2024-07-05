<template>
    <div class="container">
        <img class="bookmark" src="@/assets/bookmark.svg">
        <div class="word">{{word.value}}</div>
    </div>
</template>

<script setup lang="ts">
import { Word } from '@/main';
import { defineProps } from 'vue';

interface Props {
    word: Word
}
defineProps<Props>()
</script>

<style scoped>
.container {
    display: flex;
    padding: 0;
    align-items: center;
    gap: 40px;
}
.word {
    padding: 5px 0px;
    margin: 0 auto;
}
/* .star: {

} */
.container:not(:last-child) {
    border-bottom: 1px solid #000;
}
</style>