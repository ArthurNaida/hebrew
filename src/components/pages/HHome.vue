<template>
  <h-search-form 
  @submitRoot="(letters) => {
    onSubmit(letters, 'https://hebrew-gztg.onrender.com');
  }">
  </h-search-form>
  
  <div class="container-response pt-3 w-100" v-if="!isFirstShow">
    <Transition name="slide-fade" mode="in-out">
    <div class="main-table" v-if="!isAxiosLoad && isWords && !isAxiosError && !isMobile">
      <h-column class="content" :words="words" :partOfSpeech="'Существительное'">Существительные</h-column>      
      <h-column class="content" :words="words" :partOfSpeech="'Прилагательное'">Прилагательные</h-column>            
      <h-column class="content" :words="words" :partOfSpeech="'Глагол'">Глаголы</h-column>     
    </div>
    </Transition>
    <Transition name="slide-fade" mode="in-out">
      <h-words-accordion v-if="!isAxiosLoad && isWords && !isAxiosError && isMobile"
      :words="words"/>
    </Transition>
    <h-border class="error" v-if="!isAxiosLoad && isAxiosError">
      <h1>Какая-то ошибка...</h1>
    </h-border>
    <h-border class="error" v-if="!isAxiosLoad && !isAxiosError && !isWords">
      <h1>Нет слов с таким корнем!</h1>
    </h-border>
    <div class="loader-container" v-if="isAxiosLoad">
      <h-loading/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HColumn from '@/components/HColumn.vue';
import HLoading from '../HLoading.vue'
import HWordsAccordion from '../HWordsAccordion.vue'
import axios, { AxiosResponse } from "axios"
import { computed, ref } from 'vue';
import HSearchForm from '../HSearchForm.vue';
import HBorder from '../HBorder.vue';
import { Word, Words, Letters } from '@/main';
import { useWindowResize } from '@/hooks';

const words = ref<Words>([]);

let isAxiosLoad = ref<boolean>(false);
let isAxiosError = ref<boolean>(false);
let isFirstShow = ref<boolean>(true)
let isWords = computed(() => {return words.value.length !== 0})

const windowSize = ref<{[key: string]: number}>({
  width: window.innerWidth,
  height: window.innerHeight
})

useWindowResize(windowSize.value)

const isMobile = computed(() => {
  return windowSize.value.width > 820 ? false : true
})
const parseWords = (res: AxiosResponse<any, any>) => {
  if (res.data[0] !== 0) {
    Object.entries(res.data).forEach((e: [string, any]) => {
      words.value.push(new Word(e[1], e[0]));
    });
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
const clearWords = async () => {
  while (words.value.length > 0) {
    words.value.pop();
  }
}
const showLoading = async () => {
  isAxiosLoad.value = true;
}
const onSubmit = async(letters: Letters, serverUrl: string) => {
  try {
    if (isFirstShow.value !== false) {
      isFirstShow.value = false;
    }

    await clearWords();
    await showLoading();
    await sendRoot(letters, serverUrl);
  } catch(e) {
    isAxiosError.value = true;
  }

  try {
    await getWords(serverUrl);
  } catch (e) {isAxiosError.value = true} 
  finally {isAxiosLoad.value = false}
}
</script>

<style scoped>
@media screen and (max-width: 576px) {
 .container-response {
   margin-bottom: 100px;
 } 
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
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
.loader-container {
  width: inherit;
}
</style>
