<template>
    <h-accordion
    :titles="titles"
    @emitTitle="(title) => {console.log(title); rule(title)}">
      <h-words-list v-if="currentPartOfSpeech !== undefined || currentPartOfSpeech !== ''"
      :words="words"
      :partOfSpeech="currentPartOfSpeech"></h-words-list>
    </h-accordion>
</template>

<script>
import HAccordion from './HAccordion.vue';
import HWordsList from './HWordsList.vue';

export default {
name: 'h-words-accordion',
data() {
    return {
        titles: ['Существительные', 'Прилагательные', 'Глаголы'],
        partsOfSpeech: ['Существительное', 'Прилагательное', 'Глагол'],
        currentPartOfSpeech: ''
    }
},
methods: {
    rule(title) {
        this.titles.forEach((e, index) => {
            if (title === e) {
                console.log('e')
                this.currentPartOfSpeech = this.partsOfSpeech[index];
            }
        })
        
        console.log(this.currentPartOfSpeech)
    }
},
components: {
    HWordsList, HAccordion
},
props: {
    words: Array
}
}
</script>