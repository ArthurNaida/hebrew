<template>
    <h-accordion
    :titles="titles">
        <template v-for="(partOfSpeech, index) in partsOfSpeech" v-slot:[index] :key="index">
            <!-- <template #[index]> -->
            <h-words-list
            :words="words"
            :partOfSpeech="partOfSpeech.name">
            </h-words-list>
            <!-- </template> -->
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
    // const titles = ref(['Существительные', 'Прилагательные', 'Глаголы']);
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
    // let currentPartOfSpeech = ref('');

    // const rule = title => {
    //     titles.value.forEach((e, index) => {
    //         if (title === e) {
    //             console.log('e')
    //             currentPartOfSpeech.value = partsOfSpeech.value[index];
    //         }
    //     })
        
    //     console.log(currentPartOfSpeech)
    // }

    return {
        titles, partsOfSpeech
    }
},
// data() {
//     return {
//         titles: ['Существительные', 'Прилагательные', 'Глаголы'],
//         partsOfSpeech: ['Существительное', 'Прилагательное', 'Глагол'],
//         currentPartOfSpeech: ''
//     }
// },
// methods: {
//     rule(title) {
//         this.titles.forEach((e, index) => {
//             if (title === e) {
//                 console.log('e')
//                 this.currentPartOfSpeech = this.partsOfSpeech[index];
//             }
//         })
        
//         console.log(this.currentPartOfSpeech)
//     }
// },
components: {
    HWordsList, HAccordion
},
props: {
    words: Array
}
}
</script>