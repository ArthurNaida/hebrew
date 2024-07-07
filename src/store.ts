import { defineStore } from "pinia";
import { Words } from "./main";
import { ref } from "vue";

export const useStore = defineStore('store', () => {
    const savedWords = ref<Words>([
        {
            partOfSpeech: "Существительное",
            value: "что-то"
        },
        {
            partOfSpeech: "Существительное",
            value: "что-то еще"
        }
    ])
    const addWords = () => {}//add words
    const removeWords = () => {}//remove words

    return { savedWords, addWords, removeWords };
})