<template>
    <nav class="navbar navbar-light navbar-expand rounded-pill mb-3 ms-3 me-3 fixed-bottom d-sm-none d-md-none d-lg-none d-xl-none shadow"
        style="background: var(--main-dark);">
        <ul class="nav nav-justified w-100" id="myTab" role="tablist">
            <!-- <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                    role="tab" aria-controls="home" aria-selected="true">
                    <span><i class="bi bi-house-fill"></i></span>
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="notes-tab" data-bs-toggle="tab" data-bs-target="#notes" type="button"
                    role="tab" aria-controls="intro" aria-selected="true">
                    <span><i class="bi bi-journal-album"></i></span>
                </button>
            </li> -->
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
            <!-- <li class="nav-item" role="presentation">
                <button class="nav-link" id="collection-tab" data-bs-toggle="tab" data-bs-target="#collection" type="button"
                    role="tab" aria-controls="notif" aria-selected="false">
                    <span><i class="bi bi-collection"></i></span>
                </button>
            </li> -->
        </ul>
    </nav>
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