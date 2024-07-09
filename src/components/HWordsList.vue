<template>
    <template v-for="(word, index) in words" :key="index">
        <h-word-line v-if="word.partOfSpeech === partOfSpeech" :word="word"/>
    </template>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import { Words } from '@/main';
import HWordLine from './HWordLine.vue';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';

interface Props {
    words: Words,
    partOfSpeech: String
}
const props = defineProps<Props>();

const store = useStore();
const {savedWords} = storeToRefs(store);
// const { includesWord } = store;

onMounted(() => {
    props.words.map((word) => {
        console.log(savedWords.value.includesWord(word))
        if (savedWords.value.includesWord(word)) {
            word.isSaved  = true;
        }
    })
})
</script>