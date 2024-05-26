<template>
<div class="container">
  <h2 class="title"><slot></slot></h2>
  <div class="separator"></div>
  <div class="list">
    <template v-for="word in this.words" :key="word">
      <div class="word" v-if="word[1] === partOfSpeech">{{word[0]}}</div>
    </template>
  </div>
</div>
</template>

<script>
export default {
name: 'h-column',
props: {
  words: Array,
  partOfSpeech: String
}
}
</script>

<style scoped>
.container {
  padding-top: 20px;
  width: 20%;
  border: 2px black solid;
  margin: 20px;
  border-radius: 10px;
}
.separator {
  border-bottom: 2px solid #000;
}
.word {
  padding: 5px 0px;
}
.word:not(:last-child) {
  border-bottom: 1px solid #000;
}
</style>