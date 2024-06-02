<template>
<div class="container">
  <h-search-form @submitRoot="(...letters) => onSubmit(letters, 'https://hebrew-gztg.onrender.com')" class="root-container"></h-search-form>
  <div class="container-response" v-if="!isAxiosLoad">
    <div class="main-table" v-if="words[0] != 0 && !isAxiosError && !isMobile"> 
      <h-column class="content" :words="words" :partOfSpeech="'Существительное'">Существительные</h-column>
      <h-column class="content" :words="words" :partOfSpeech="'Прилагательное'">Прилагательные</h-column>
      <h-column class="content" :words="words" :partOfSpeech="'Глагол'">Глаголы</h-column>
    </div>
    <h-accordion v-else-if="words[0] != 0 && !isAxiosError && isMobile"
    :titles="['Существительные', 'Прилагательные', 'Глаголы']">
    <h-words-list :words="words" :partOfSpeech="'Существительное'"></h-words-list>
    </h-accordion>
    <h-border class="error" v-else-if="isAxiosError">
      <h1>Какая-то ошибка...</h1>
    </h-border>
    <h-border class="error" v-else>
      <h1>Нет слов с таким корнем!</h1>
    </h-border>
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
import HSearchForm from './HSearchForm.vue';
import HBorder from './HBorder.vue';
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
    HSearchForm, HBorder
  },
  computed: {
    isMobile() {
      return ref(window.innerWidth).value > 600 ? false : true
    },
  },
  methods: {
    parseWords(res) {
      if (res.data[0] !== 0) {
          this.words = Object.entries(res.data)
      }
      else {
        this.words[0] = 0
      }
    },
    async sendRoot(letters, serverUrl) {
      const [letter1, letter2, letter3] = letters;
      await axios({
        url: `${serverUrl}/post`,
        // url: "http://127.0.0.1:8000", 
        method: 'post',
        data: JSON.stringify({"url": `http://www.pealim.com/ru/dict/?pos=all&num-radicals=all&rf=${letter1}&r2=${letter2}&r1=${letter3}`}),
        headers: {
          'Accept' : 'application/json',
          "Content-Type": 'application/json'
        }
      })
      .then(() => {this.isAxiosError = false})
    },
    async getWords(serverUrl) {
      await axios.get(`${serverUrl}/get`)
      // await axios.get("http://127.0.0.1:8000")
      .then(res => {
        this.parseWords(res);
      })  
    },
    async onSubmit(letters, serverUrl) {
      try {
        this.isAxiosLoad = true;
        await this.sendRoot(letters, serverUrl);
      } catch(e) {this.isAxiosError = true}

      try {
        await this.getWords(serverUrl);
      } catch (e) {this.isAxiosError = true} 
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
.error {
  margin: auto;
}
</style>
