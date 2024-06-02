<template>
    <template v-for="([word, wordPartOfSpeech], index) in words" :key="index">
        <div class="word" v-if="wordPartOfSpeech === partOfSpeech">{{word}}</div>
    </template>
</template>

<script>
export default {
name: 'h-words-list',
props: {
  words: Array,
  partOfSpeech: String
}
}
</script>

<style scoped>
.word {
    padding: 5px 0px;
}
.word:not(:last-child) {
    border-bottom: 1px solid #000;
}
</style>