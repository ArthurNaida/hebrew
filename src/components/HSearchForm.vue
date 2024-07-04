<template>
<h-border>
    <div class="root-container">
        <h2>Введите корень слова на иврите</h2>
        <form @submit.prevent="onSubmitRoot">
          <div class="root-input">
            <input v-model="letters.letter3" pattern="[א-ת]" maxlength="1" size="1" required>
            <h1>.</h1>
            <input v-model="letters.letter2" pattern="[א-ת]" maxlength="1" size="1" required>
            <h1>.</h1>
            <input v-model="letters.letter1" pattern="[א-ת]" maxlength="1" size="1" required>
          </div>
          <h-submit class="submit" :value="'Отправить'"></h-submit>
        </form> 
      </div>
</h-border>
</template>

<script>
import HBorder from './HBorder.vue';
import HSubmit from './HSubmit.vue';
export default {
name: 'h-search-root',
components: {HBorder, HSubmit},
setup(_, {emit}) {
    const letters = {
        letter1: '',
        letter2: '',
        letter3: ''
    }
    
    const onSubmitRoot = () => {
        emit('submitRoot', letters)
    }

    return {
        letters,
        onSubmitRoot
    }
}
// data() {
//     return {
//         letter1: '',
//         letter2: '',
//         letter3: ''
//     }
// }
}
</script>

<style scoped>
input {
    border: 0;
    border-bottom: 2px solid #000;
    font-size: 56px;
    background: var(--main-white);
}
input:focus-visible {
    border: 0;
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
.submit {
    cursor: pointer;
    margin-top: 20px;
}
</style>