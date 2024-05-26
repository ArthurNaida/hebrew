<template>
<div class="container">
  <div class="title">
    <h1>Hebrew Tutor</h1>
  </div>
  <div class="root-container">
    <h2>Введите корень слова на иврите</h2>
    <form @submit.prevent="onSubmit">
      <div class="root-input">
        <input v-model="letter3" pattern="[א-ת]" maxlength="1" size="1" required>
        <h1>.</h1>
        <input v-model="letter2" pattern="[א-ת]" maxlength="1" size="1" required>
        <h1>.</h1>
        <input v-model="letter1" pattern="[א-ת]" maxlength="1" size="1" required>
      </div>
      <input type="submit" value="Отправить">
    </form> 
  </div>
  <div class="container-response" v-if="!isAxiosLoad">
    <div class="main-table" v-if="words[0] != 0 && !isAxiosError">
      <h-column class="content" :words="words" :partOfSpeech="'Существительное'">Существительные</h-column>
      <h-column class="content" :words="words" :partOfSpeech="'Прилагательное'">Прилагательные</h-column>
      <h-column class="content" :words="words" :partOfSpeech="'Глагол'">Глаголы</h-column>
    </div>
    <div class="error" v-else-if="isAxiosError">
      <h1>Какая-то ошибка...</h1>
    </div>
    <div class="no-words" v-else>
      <h1>Нет слов с таким корнем!</h1>
    </div>
  </div>
    <div class="loader-container" v-else>
      <VueLoading :active="isAxiosLoad" 
      :is-full-page="false" :z-index="99">
      </VueLoading>
    </div>
</div>
</template>

<script>
import VueLoading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import HColumn from './HColumn.vue';
import axios from "axios"
export default {
  name: 'h-home',
  data() {
    return {
      isAxiosLoad: false,
      isAxiosError: false,
      words: {},
      letter1: '',
      letter2: '',
      letter3: ''
    }
  },
  components: {
    HColumn, VueLoading
  },
  methods: {
    async onSubmit() {
      try {
      this.isAxiosLoad = true;
      await axios({
        url: "http://127.0.0.1:8000/post", 
        method: 'post',
        data: JSON.stringify({"url": `http://www.pealim.com/ru/dict/?pos=all&num-radicals=all&rf=${this.letter1}&r2=${this.letter2}&r1=${this.letter3}`}),
        headers: {
          'Accept' : 'application/json',
          "Content-Type": 'application/json'
        }
      })
      
      .then(res => {console.log(res); this.isAxiosError = false})
      } catch(e) {console.log('catch' ); this.isAxiosError = true}
      try {
      await axios.get("http://127.0.0.1:8000/get")
      .then(res => {
        this.isAxiosError = false
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
.main-table {
  display: flex;
  width: 100%;
  justify-content: center;
}
.loader-container {
  position: relative;
  width: inherit;
  height: 30vh;
}
input {
  border: 0px;
  border-bottom: 3px solid #000;
  font-size: 56px;
}
.root-input {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
}
.root-input > h1 {
  width: 20px;
  display: block;
}
input[type=submit] {
  cursor: pointer;
  margin-top: 20px;
}
</style>
