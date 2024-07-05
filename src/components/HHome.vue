<template>
<div class="container">
  <h-search-form @submitRoot="(letters) => onSubmit(letters, 'https://hebrew-gztg.onrender.com')" class="root-container"></h-search-form>
  
  <!-- <Transition name="slide-fade"> -->
  <div class="container-response" v-if="!isFirstShow">
    <Transition name="slide-fade">
    <div class="main-table" v-if="!isAxiosLoad && isWords && !isAxiosError && !isMobile">
      <h-column class="content" :words="words" :partOfSpeech="'Существительное'">Существительные</h-column>      
      <h-column class="content" :words="words" :partOfSpeech="'Прилагательное'">Прилагательные</h-column>            
      <h-column class="content" :words="words" :partOfSpeech="'Глагол'">Глаголы</h-column>     
    </div>
    </Transition>
    <Transition name="slide-fade">
      <h-words-accordion v-if="!isAxiosLoad && isWords && !isAxiosError && isMobile" :words="words"></h-words-accordion>
    </Transition>
    <h-border class="error" v-if="!isAxiosLoad && isAxiosError">
      <h1>Какая-то ошибка...</h1>
    </h-border>
    <h-border class="error" v-if="!isAxiosLoad && !isAxiosError && !isWords">
      <h1>Нет слов с таким корнем!</h1>
    </h-border>
  </div>
  <!-- </Transition> -->
  <div class="loader-container" v-if="isAxiosLoad">
    <h-loading></h-loading>
  </div>
</div>
</template>

<script setup lang="ts">
import HColumn from './HColumn.vue';
import HLoading from './HLoading.vue'
import HWordsAccordion from './HWordsAccordion.vue'
import axios, { AxiosResponse } from "axios"
import { computed, ref } from 'vue';
import HSearchForm from './HSearchForm.vue';
import HBorder from './HBorder.vue';
class Word {
  partOfSpeech: string = '';
  value: string = '';
  isEmpty(): boolean {
    return this.value === ''
  }
  constructor(partOfSpeech: string, value: string) {
    this.partOfSpeech = partOfSpeech;
    this.value = value;
  }
}
interface Letters {
  [key: string]: string;
}
type Words = Array<Word>


const words = ref<Words>([]);

let isAxiosLoad = ref<boolean>(false);
let isAxiosError = ref<boolean>(false);
let isFirstShow = ref<boolean>(true)
let isWords = computed(() => {return words.value.length !== 0})

// words.push(new Word())

const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight
})
function useWindowResize() {
  window.addEventListener('resize', () => {
    windowSize.value.width = window.innerWidth;
    windowSize.value.height = window.innerHeight;
  })
}

useWindowResize()
const isMobile = computed(() => {
  return windowSize.value.width > 600 ? false : true
})
const parseWords = (res: AxiosResponse<any, any>) => {
console.log(words)
if (res.data[0] !== 0) {
  Object.entries(res.data).forEach((e: [string, any]) => {
    words.value.push(new Word(e[1], e[0]));
  });
  console.log(res.data)
}
} 
const sendRoot = async(letters: Letters, serverUrl: string) => {
const {letter1, letter2, letter3} = letters;
await axios({
  url: `${serverUrl}/post`,
  method: 'post',
  data: JSON.stringify({"url": `http://www.pealim.com/ru/dict/?pos=all&num-radicals=all&rf=${letter1}&r2=${letter2}&r1=${letter3}`}),
  headers: {
    'Accept' : 'application/json',
    "Content-Type": 'application/json'
  }
})
.then(() => {isAxiosError.value = false})
} 
const getWords = async(serverUrl: string) => {
await axios.get(`${serverUrl}/get`)
.then(res => {
  parseWords(res);
})
.catch(e => {words.value = []; console.log(e)})
}
const clearWords = () => {
  while (words.value.length > 0) {
    words.value.pop();
  }
}
const onSubmit = async(letters: Letters, serverUrl: string) => {
  try {
    if (isFirstShow.value !== false) {
      isFirstShow.value = false;
    }

    isAxiosLoad.value = true;
    clearWords();
    await sendRoot(letters, serverUrl);
  } catch(e) {isAxiosError.value = true;}

  try {
    await getWords(serverUrl);
  } catch (e) {isAxiosError.value = true} 
  finally {isAxiosLoad.value = false}
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.container {
  padding: 20px;
  position: relative;
}
.main-table {
  display: flex;
  width: 100%;
  justify-content: center;
}
.root-container {
  margin: 0 auto 20px auto;
}
.error {
  margin: auto;
}

</style>
