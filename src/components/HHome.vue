<template>
<div class="container">
  <h-search-root @submitRoot="(...letters) => onSubmit(...letters)" class="root-container"></h-search-root>
  <div class="container-response" v-if="!isAxiosLoad">
    <div class="main-table" v-if="words[0] != 0 && !isAxiosError && !isMobile"> 
      <h-column class="content" :words="words" :partOfSpeech="'Существительное'">Существительные</h-column>
      <h-column class="content" :words="words" :partOfSpeech="'Прилагательное'">Прилагательные</h-column>
      <h-column class="content" :words="words" :partOfSpeech="'Глагол'">Глаголы</h-column>
    </div>
    <h-accordion v-else-if="words[0] != 0 && !isAxiosError && isMobile"
    :titles="['Существительные', 'Прилагательные', 'Глаголы']">
    <template v-for="word in this.words" :key="word">
      {{word[0]}}<br>
    </template>
    </h-accordion>
    <div class="error" v-else-if="isAxiosError">
      <h1>Какая-то ошибка...</h1>
    </div>
    <div class="no-words" v-else>
      <h1>Нет слов с таким корнем!</h1>
    </div>
  </div>
  <div class="loader-container" v-else>
    <h-loading></h-loading>
  </div>
</div>
</template>

<script>
import HColumn from './HColumn.vue';
import HLoading from './HLoading.vue'
import HAccordion from './HAccordion.vue'
import axios from "axios"
import { ref } from 'vue';
import HSearchRoot from './HSearchRoot.vue';
export default {
  name: 'h-home',
  data() {
    return {
      isAxiosLoad: false,
      isAxiosError: false,
      words: {},
    }
  },
  components: {
    HColumn, HAccordion, HLoading,
    HSearchRoot
  },
  computed: {
    isMobile() {
      console.log(ref(window.innerWidth).value)
      return ref(window.innerWidth).value > 600 ? false : true
    }
  },
  methods: {
    async onSubmit(letter1, letter2, letter3) {
      try {
      this.isAxiosLoad = true;
      await axios({
        url: "https://hebrew-gztg.onrender.com/post",
        // url: "http://127.0.0.1:8000", 
        method: 'post',
        data: JSON.stringify({"url": `http://www.pealim.com/ru/dict/?pos=all&num-radicals=all&rf=${letter1}&r2=${letter2}&r1=${letter3}`}),
        headers: {
          'Accept' : 'application/json',
          "Content-Type": 'application/json'
        }
      })
      
      .then(res => {console.log(res); this.isAxiosError = false})
      } catch(e) {console.log('catch' ); this.isAxiosError = true}
      try {
      await axios.get("https://hebrew-gztg.onrender.com/get")
      // await axios.get("http://127.0.0.1:8000")
      .then(res => {
        this.isAxiosError = false
        console.log(this.words)
        if (res.data[0] !== 0) {
          this.words = Object.entries(res.data)
        }
        else {
          this.words[0] = 0
        }
      })  
      } catch (e) {console.log('catch' + e); this.isAxiosError = true} 
      finally {this.isAxiosLoad = false}
    }
  }
}
</script>

<style>
.container {
  padding: 20px;
}
.main-table {
  display: flex;
  width: 100%;
  justify-content: center;
}
.root-container {
  margin: 0 auto 20px auto;
}
</style>
