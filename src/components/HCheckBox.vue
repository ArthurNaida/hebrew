<template>
<input type="checkbox"
@input="(e) => $emit('update:checked', e.target.checked)"
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
import { defineProps } from 'vue';

interface Props {
    id: string;
    name: string;
    checked: boolean;
}
defineProps<Props>();
</script>

<style scoped>
input {
    display: none;
}
</style>