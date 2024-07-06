<template>
    <template v-for="(word, index) in words" :key="index">
        <h-word-line v-if="word.partOfSpeech === partOfSpeech" :word="word"></h-word-line>
    </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Words } from '@/main';
import HWordLine from './HWordLine.vue';

interface Props {
    words: Words,
    partOfSpeech: String
}
defineProps<Props>();
</script>