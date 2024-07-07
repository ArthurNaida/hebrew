import { createRouter, createWebHashHistory } from "vue-router";
import HHome from "./components/pages/HHome.vue";
import HSaved from './components/pages/HSaved.vue'

const routes = [
    {path: '/home', name: 'home', component: HHome, alias: '/'},
    {path: '/saved', name: 'saved', component: HSaved}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})