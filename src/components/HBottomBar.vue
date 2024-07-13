<template>
    <div class="navbar-wrapper  fixed-bottom d-sm-none d-md-none d-lg-none d-xl-none shadow">

        <nav class="navbar navbar-light navbar-expand rounded-pill my-3 ms-3 me-3 d-sm-none d-md-none d-lg-none d-xl-none shadow"
            style="background: var(--main-dark);">
            <ul class="nav nav-justified w-100" id="myTab" role="tablist">
                <li class="nav-item" role="presentation" v-for="(page, index) of pages" :key="index">
                    <button class="nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button"
                        role="tab" aria-controls="profile" aria-selected="false">
                        <RouterLink :to="page.path" href="#" class="nav-link text-white d-flex align-items-center" aria-current="page"
                        ref="routerLink">
                        <div class="router-item mx-auto">
                        <img width="18" :src="page.imgsrc" :alt="page.imgalt">
                        </div>
                        </RouterLink>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
    pages: {
        path: string,
        imgsrc: string,
        imgalt?: string
    }[];
}

defineProps<Props>();
</script>

<style scoped>
.navbar-wrapper {
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.3));
}
</style>