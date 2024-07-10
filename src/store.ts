import { defineStore } from "pinia";
import { Words, Word } from "./main";
import { ref } from "vue";

export const useStore = defineStore('store', () => {

    const savedWords = ref<Words>(new Words)

    return { savedWords };
})