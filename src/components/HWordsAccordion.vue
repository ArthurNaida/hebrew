<template>
    <h-accordion
    :titles="titles">
        <template v-for="(partOfSpeech, index) in partsOfSpeech" v-slot:[index] :key="index">
            <h-words-list
            :words="words"
            :partOfSpeech="partOfSpeech.name"/>
        </template>
    </h-accordion>
</template>

<script>
import HAccordion from './HAccordion.vue';
import HWordsList from './HWordsList.vue';
import {ref, computed} from 'vue';

export default {
name: 'h-words-accordion',
emits: ['onSubmitRoot'],
setup() {
    const partsOfSpeech = ref([
        {
            name: 'Существительное',
            group: 'Существительные' 
        },
        {
            name: 'Прилагательное',
            group: 'Прилагательные'
        },
        {
            name: 'Глагол',
            group: 'Глаголы' 
        }
    ]);
    const titles = computed(() => {
        return partsOfSpeech.value.map((e) => e.group)
    })
    
    console.log(titles)

    return {
        titles, partsOfSpeech
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