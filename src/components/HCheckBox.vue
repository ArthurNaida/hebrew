<template>
<input type="checkbox"
@input="onCheck"
:checked="checked"
:id="id"
:name="name">
<label :for="id">
    <Bookmark
    :pathClass="checked ? 'fill' : ''">
    </Bookmark>
</label>
</template>

<script setup lang="ts">
import Bookmark from '@/components/HBookmarkSVG.vue'
import { defineProps, defineEmits } from 'vue';

interface Props {
    id: string;
    name: string;
    checked: boolean;
}
defineProps<Props>();

const emit = defineEmits(['update:checked'])
const onCheck = (event: Event) => {
    emit('update:checked', (event.target as any).checked)
}  
</script>

<style scoped>
input {
    display: none;
}
</style>