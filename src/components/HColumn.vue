<template>
<h-border class="container">
  <h2 class="title"><slot></slot></h2>
  <div class="list">
    <template v-for="([word, wordPartOfSpeech], index) in words" :key="index">
      <div class="word" v-if="wordPartOfSpeech === partOfSpeech">{{word}}</div>
    </template>
  </div>
</h-border>
</template>

<script>
import HBorder from './HBorder.vue'
export default {
  components: { HBorder },
name: 'h-column',
props: {
  words: Array,
  partOfSpeech: String
}
}
</script>

<style scoped>
.container {
  margin: 20px;
}
.list {
  border-top: 2px solid #000;
}
.list:empty {
  display: none;
}
.word {
  padding: 5px 0px;
}
.separator {
  border-bottom: 2px solid #000;
}
.word:not(:last-child) {
  border-bottom: 1px solid #000;
}
</style>