<template>
    <Transition name="slide-fade" mode="in-out">
        <div class="container">
            <h-words-accordion
            v-if="savedWords.length !== 0"
            :words="savedWords"/>
            <h-border class="container" v-else>
                <h1>Нет сохраненных слов</h1>
            </h-border>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import HWordsAccordion from '../HWordsAccordion.vue';
import { useStore } from '@/store';
import HBorder from '../HBorder.vue';

const store = useStore();
const { savedWords } = storeToRefs(store)
</script>