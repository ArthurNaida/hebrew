<template>
    <!-- <h-layout> -->
        <Transition name="slide-fade" mode="in-out">
            <div class="container">
                <h-words-accordion
                :words="words"/>
            </div>
        </Transition>
    <!-- </h-layout> -->
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import HWordsAccordion from '../HWordsAccordion.vue';
import { useStore } from '@/store';

const store = useStore();
const { words } = storeToRefs(store)
</script>