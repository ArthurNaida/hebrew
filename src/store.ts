import { defineStore } from "pinia";
import { Words, Word } from "./main";
import { ref } from "vue";

export const useStore = defineStore('store', () => {

    const savedWords = ref<Words>(new Words)
    // savedWords.value.includesWord = function (targetWord: Word):boolean {
    //     let word: Word;
    //     for (word of this) {
    //         console.log('iw', word.value, targetWord.value, word.value === targetWord.value)
    //         if (word.value === targetWord.value) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    
    // function addWords(word: Word): void {
    //     console.log('add')
    //     if (!savedWords.value.includesWord(word)) {
    //         word.isSaved = true;
    //         savedWords.value.push(word)
    //     }
    // }
    // function removeWords (word: Word): void {
    //     function removeItem<T> (arr: Array<T>, item: any):void {
    //         const index = arr.indexOf(item);
    //         arr.splice(index, 1);
    //     } 
    //     console.log('rm', savedWords.value, word.value)
    //     if (savedWords.value.includesWord(word)) {
    //         console.log('is include')
    //         word.isSaved = false;
    //         removeItem<Word>(savedWords.value, word);
    //     }
    // }

    return { savedWords };
})