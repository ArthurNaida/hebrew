

<template>
<div class="sidebar-container h-100 flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <img width="100" :src="require('@/assets/logo.svg')">
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" v-for="(title, index) in titles" :key="index">
        <a href="#" class="nav-link text-white d-flex align-items-start" aria-current="page"
        :class="activePage === title ? 'active' : ''"
        @click="activePage = title">
          <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> -->
          {{title}}
        </a>
      </li>
    </ul>
    <hr>
    <!-- <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> -->
  </div>
  </template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from 'vue';

interface Props {
    titles: string[]
}
defineProps<Props>();

const activePage = ref<string>('')
</script>

<style>
@media (max-width: 1200px) {
    .sidebar-container {
        display: none;
    }
}
@media (min-width: 1200px) {
    .sidebar-container {
        display: flex;
    }
}
</style>