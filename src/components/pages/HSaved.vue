<template>
    <Transition name="slide-fade" mode="in-out">
        <div class="container">
            <template v-if="savedWords.length !== 0">
                <h-border>
                    <h1>Сохраненные слова</h1>
                </h-border>
                <div class="mt-3">
                    <h-words-accordion
                :words="savedWords"/>
                </div>
            </template>
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