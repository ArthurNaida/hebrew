<template>
    <button type="submit">{{value}}</button>
</template>

<script>
export default {
name: 'h-submit',
props: {
    value: String
}
}
</script>

<style scoped>
button {
    display: inline-block;
    background-color: #007bff;
    font-weight: 400;
    color: var(--main-white);
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    padding: .375rem .75rem;
    font-size: 2rem;
    line-height: 1.5;
    border-radius: .25rem;
    
    transition: background-color .15s ease;
}
button:hover {
    background-color: #0069d9;
    transition: background-color .15s ease;
}
</style>