<template>
<div class="container">

  <h-border>
    <h2 class="title"><slot></slot></h2>
    <div class="list">
      <h-words-list :words="words" :partOfSpeech="partOfSpeech"></h-words-list>
    </div>
  </h-border>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Words } from '@/main';
import HBorder from './HBorder.vue'
import HWordsList from './HWordsList.vue'

interface Props {
  words: Words,
  partOfSpeech: string
}

defineProps<Props>()
</script>

<style scoped>
/* .container {
  margin: 20px;
} */
.title {
  padding: 20px;
  border-bottom: 2px black solid;
}

.list:empty {
  display: none;
}
</style>