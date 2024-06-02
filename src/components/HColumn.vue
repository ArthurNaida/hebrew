<template>
<h-border class="container">
  <h2 class="title"><slot></slot></h2>
  <div class="list">
    <h-words-list :words="words" :partOfSpeech="partOfSpeech"></h-words-list>
  </div>
</h-border>
</template>

<script>
import HBorder from './HBorder.vue'
import HWordsList from './HWordsList.vue'
export default {
  components: { HBorder, HWordsList},
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
</style>