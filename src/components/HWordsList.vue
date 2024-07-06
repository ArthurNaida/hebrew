<template>
    <template v-for="(word, index) in words" :key="index">
        <h-word-line v-if="word.partOfSpeech === partOfSpeech" :word="word"></h-word-line>
    </template>
</template>

<script setup lang="ts">
// export default {
// name: 'h-words-list',
// props: {
//   words: Array,
//   partOfSpeech: String
// }
// }
import { defineProps } from 'vue';
import { Words } from '@/main';
import HWordLine from './HWordLine.vue';

interface Props {
    words: Words,
    partOfSpeech: String
}
defineProps<Props>();
</script>

<!-- <style scoped>
.word {
    padding: 5px 0px;
}
.word:not(:last-child) {
    border-bottom: 1px solid #000;
}
</style> -->