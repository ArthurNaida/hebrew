import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

export class Word {
    partOfSpeech?: string = '';
    value?: string = '';
    isSaved?: boolean = false;
    isEmpty?(): boolean {
        return this.value === ''
    }
    constructor(partOfSpeech: string, value: string) {
        this.partOfSpeech = partOfSpeech;
        this.value = value;
    }
}

export class Words extends Array<Word> {
    includesWord (targetWord: Word):boolean {
        let word: Word;
        for (word of this) {
            console.log('iw', word.value, targetWord.value, word.value === targetWord.value)
            if (word.value === targetWord.value) {
                return true;
            }
        }
        return false;
    }
    addWords (word: Word): void {
        console.log('add')
        if (!this.includesWord(word)) {
            word.isSaved = true;
            this.push(word)
        }
    }
    removeWords (word: Word): void {
        function removeItem<T> (arr: Array<T>, item: any):void {
            const index = arr.indexOf(item);
            arr.splice(index, 1);
        } 
        console.log('rm', this, word.value)
        if (this.includesWord(word)) {
            console.log('is include')
            word.isSaved = false;
            removeItem<Word>(this, word);
        }
    }

    constructor() {
        super()
        // this.includesWord = includesWord
        // this.addWords = add
    }
}

export interface Letters {
    [key: string]: string;
}

export function useWindowResize(windowSize: {[key: string]: number}) {
    window.addEventListener('resize', () => {
        windowSize.width = window.innerWidth;
        windowSize.height = window.innerHeight;
    })
}

createApp(App).use(createPinia()).use(router).mount('#app');
