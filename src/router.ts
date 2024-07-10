import { createRouter, createWebHashHistory } from "vue-router";
import HHome from "./components/pages/HHome.vue";
import HSaved from './components/pages/HSaved.vue'
import HPractice from "./components/HPractice.vue";

const routes = [
    {path: '/home', name: 'home', component: HHome, alias: '/'},
    {path: '/saved', name: 'saved', component: HSaved},
    {path: '/practice', name: 'practice', component: HPractice},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})