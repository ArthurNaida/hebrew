<template>
<div class="container">
  <h-search-form @submitRoot="(letters) => onSubmit(letters, 'https://hebrew-gztg.onrender.com')" class="root-container"></h-search-form>
  
  <Transition name="slide-fade">
  <div class="container-response">
    <Transition name="slide-fade">
    <div class="main-table" v-if="!isAxiosLoad && words[0] != 0 && !isAxiosError && !isMobile">
      <h-column class="content" :words="words" :partOfSpeech="'Существительное'">Существительные</h-column>      
      <h-column class="content" :words="words" :partOfSpeech="'Прилагательное'">Прилагательные</h-column>            
      <h-column class="content" :words="words" :partOfSpeech="'Глагол'">Глаголы</h-column>     
    </div>
    </Transition>
    <Transition name="slide-fade">
      <h-words-accordion v-if="!isAxiosLoad && words[0] != 0 && !isAxiosError && isMobile" :words="words"></h-words-accordion>
    </Transition>
    <h-border class="error" v-if="!isAxiosLoad && isAxiosError">
      <h1>Какая-то ошибка...</h1>
    </h-border>
    <h-border class="error" v-if="!isAxiosLoad && !isAxiosError && words[0] == 0">
      <h1>Нет слов с таким корнем!</h1>
    </h-border>
  </div>
  </Transition>
  <div class="loader-container" v-if="isAxiosLoad">
    <h-loading></h-loading>
  </div>
</div>
</template>

<script>
import HColumn from './HColumn.vue';
import HLoading from './HLoading.vue'
import HWordsAccordion from './HWordsAccordion.vue'
import axios from "axios"
import { computed, ref } from 'vue';
import HSearchForm from './HSearchForm.vue';
import HBorder from './HBorder.vue';
export default {
  name: 'h-home',
  setup() {
    let isAxiosLoad = ref(false);
    let isAxiosError = ref(false);
    const words = ref({});

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
    const parseWords = (res) => {
      if (res.data[0] !== 0) {
        words.value = Object.entries(res.data)
      }
      else {
        words.value[0] = 0
      }
    } 
    const sendRoot = async(letters, serverUrl) => {
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
    const getWords = async(serverUrl) => {
      await axios.get(`${serverUrl}/get`)
      .then(res => {
        parseWords(res);
      })  
    } 
    const onSubmit = async(letters, serverUrl) => {
      try {
        isAxiosLoad.value = true;
        await sendRoot(letters, serverUrl);
      } catch(e) {isAxiosError.value = true}

      try {
        await getWords(serverUrl);
      } catch (e) {isAxiosError.value = true} 
      finally {isAxiosLoad.value = false}
    }
    return {
      isAxiosError, isAxiosLoad, words,
      isMobile,
      onSubmit, getWords, sendRoot, parseWords
    }
  },
  components: {
    HColumn, HWordsAccordion, HLoading,
    HSearchForm, HBorder
  },
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
