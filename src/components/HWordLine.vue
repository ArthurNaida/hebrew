<template>
<div class="word-container">
    <label :for="word.value">
        <div class="wrapper">
            <div class="bookmark">
                <CheckBox
                :id="word.value"
                :name="word.value"
                v-model:checked="onCheck"
                @update:checked="onSave(word)"/>
            </div>
            <div class="word">{{word.value}}</div>
        </div>
    </label>
</div>
</template>

<script setup lang="ts">
import { Word } from '@/main';
import { defineProps, onUpdated, onMounted } from 'vue';
import { ref } from 'vue';
import CheckBox from '@/components/HCheckBox.vue';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';

interface Props {
    word: Word
}
const props = defineProps<Props>();

const store = useStore();
const {savedWords} = storeToRefs(store);

const onCheck = ref<boolean>();
const onSave = (word: Word):void => {
    onCheck.value ? savedWords.value.addWords(word) : savedWords.value.removeWords(word);
}

onMounted(() => {
    onCheck.value = props.word.isSaved
})
onUpdated(() => {
    onCheck.value = props.word.isSaved
})
</script>

<style scoped>
label {
    display: block;
}
.word-container {
    padding: 0;
    margin: 0;
}
.wrapper {
    display: flex;
    padding: 0;
    align-items: center;
    gap: 10px;
}
.word {
    padding: 5px 0px;
    margin: 0 auto;
}
.word-container:not(:last-child) {
    border-bottom: 1px solid #000;
}
</style>