import { defineStore } from "pinia";
import { Words, Word } from "./main";
import { ref } from "vue";

export const useStore = defineStore('store', () => {
    const savedWords = ref<Words>([])
    function includesWord(words: Words, targetWord: Word):boolean {
        let word: Word;
        for (word of words) {
            console.log('iw', word.value, targetWord.value, word.value === targetWord.value)
            if (word.value === targetWord.value) {
                return true;
            }
        }
        return false;
    }
    function addWords(word: Word): void {
        console.log('add')
        if (!includesWord(savedWords.value, word)) {
            word.isSaved = true;
            savedWords.value.push(word)
        }
    }
    function removeWords (word: Word): void {
        function removeItem<T> (arr: Array<T>, item: any):void {
            const index = arr.indexOf(item);
            arr.splice(index, 1);
        } 
        console.log('rm', savedWords.value, word.value)
        if (includesWord(savedWords.value, word)) {
            console.log('is include')
            word.isSaved = false;
            removeItem<Word>(savedWords.value, word);
        }
    }

    return { savedWords, addWords, removeWords, includesWord };
})