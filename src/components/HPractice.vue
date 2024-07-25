<template>
    <div class="container mx-auto">
        <h-border>
            <h1>Практика</h1>
        </h-border>
        <div class="mt-3" v-if="savedWords.length === 0">
            <h-border>
                Сохраните слова из поиска, чтобы начать практиковаться!
            </h-border>
        </div>
    </div>
    <h-switch-button
    v-if="savedWords.length !== 0" 
    @switchLang="switchCommonLang">{{ commonLang }}</h-switch-button>
    <h-carousel class="carousel">
        <slide v-for="(word, index) in wordsByLang" :key="index">
            <h-border>
                <div class="carousel__item" @click="switchLangInWord(word)">{{ word.currentLang === 'heb' ? word.heb : word.rus }}</div>
            </h-border>
        </slide>
    </h-carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Slide } from 'vue3-carousel'
import HBorder from './HBorder.vue';
import HSwitchButton from '@/components/HSwitchButton.vue'
import HCarousel from './HCarousel.vue'
import { ref } from 'vue';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const {savedWords} = storeToRefs(store);

let commonLang = ref<string>('HEB')

const wordsByLang = ref(savedWords.value.map((word) => {
  if (word.value !== undefined) {
    let heb = word.value.split('-')[0];
    let rus = word.value.split('-')[1];
    let currentLang = 'heb';
    
    return {heb, rus, currentLang};
  }
}))
function switchCommonLang() {
    commonLang.value = commonLang.value === 'HEB' ? 'RUS' : 'HEB';

    wordsByLang.value.forEach(word => {
        word.currentLang = commonLang.value === 'HEB' ? 'heb' : 'rus';
    });
}
function switchLangInWord(word: {heb: string, rus: string, currentLang: string}) {
  word.currentLang = word.currentLang === 'heb' ? 'rus' : 'heb';
}
</script>

<style scoped>
.carousel {
    margin-bottom: 100px;
}
</style>