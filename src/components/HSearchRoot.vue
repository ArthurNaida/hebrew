<template>
<h-border>
    <div class="root-container">
        <h2>Введите корень слова на иврите</h2>
        <form @submit.prevent="$emit('submit', letter1, letter2, letter3)">
          <div class="root-input">
            <input v-model="letter3" pattern="[א-ת]" maxlength="1" size="1" required>
            <h1>.</h1>
            <input v-model="letter2" pattern="[א-ת]" maxlength="1" size="1" required>
            <h1>.</h1>
            <input v-model="letter1" pattern="[א-ת]" maxlength="1" size="1" required>
          </div>
          <input type="submit" value="Отправить">
        </form> 
      </div>
</h-border>
</template>

<script>
import HBorder from './HBorder.vue';
export default {
name: 'h-search-root',
components: {HBorder},
data() {
    return {
        letter1: '',
        letter2: '',
        letter3: ''
    }
}
}
</script>

<style scoped>
input {
    border: 0px;
    border-bottom: 3px solid #000;
    font-size: 56px;
}
.root-input {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
}
.root-input > h1 {
    width: 20px;
    display: block;
}
input[type=submit] {
    cursor: pointer;
    margin-top: 20px;
    font-size: 2rem;
}
</style>