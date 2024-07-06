import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

export class Word {
    partOfSpeech: string = '';
    value: string = '';
    isEmpty(): boolean {
    return this.value === ''
    }
    constructor(partOfSpeech: string, value: string) {
    this.partOfSpeech = partOfSpeech;
    this.value = value;
    }
}

export interface Letters {
    [key: string]: string;
}

export type Words = Array<Word>

export function useWindowResize(windowSize: {[key: string]: number}) {
    window.addEventListener('resize', () => {
        windowSize.width = window.innerWidth;
        windowSize.height = window.innerHeight;
    })
}

createApp(App).mount('#app');
