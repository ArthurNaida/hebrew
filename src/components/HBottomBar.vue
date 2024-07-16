<template>
    <div class="navbar-wrapper  fixed-bottom d-sm-none d-md-none d-lg-none d-xl-none">
        <nav class="navbar navbar-light navbar-expand rounded-pill my-3 ms-1 me-1 d-sm-none d-md-none d-lg-none d-xl-none shadow"
            style="background: var(--main-dark);">
            <ul class="nav nav-justified w-100" id="myTab" role="tablist">
                <li class="nav-item nav-pills" role="presentation" v-for="(page, index) of pages" :key="index">
                    <!-- <button class="nav-link w-auto mx-auto" id="project-tab" data-bs-toggle="tab" data-bs-target="#project" type="button" -->
                        <!-- role="tab" aria-controls="profile" aria-selected="false"> -->
                        <RouterLink :to="page.path" href="#" class="nav-link w-75 mx-auto text-white d-flex align-items-center" aria-current="page"
                        ref="routerLink" id="project-tab"
                        :class="activePage === page.path ? 'active' : ''"
                        @click="activePage = page.path; console.log(activePage, page.path)">
                            <div class="router-item mx-auto">
                                <img width="18" :src="page.imgsrc" :alt="page.imgalt">
                            </div>
                        </RouterLink>
                    <!-- </button> -->
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
    pages: {
        path: string,
        imgsrc: string,
        imgalt?: string
    }[];
}
defineProps<Props>();

const activePage = ref<string>();

const router = useRouter()
onMounted(async () => {
  await router.isReady()
  activePage.value = router.currentRoute.value.fullPath
})
</script>

<style scoped>
@media screen and (max-width: 384px) {
    /* .nav-link {
        padding-right: 0.6rem;
        padding-left: 0.6rem;
    }    */
}
</style>