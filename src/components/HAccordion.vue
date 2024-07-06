<template>
    <div class="accordion" id="accordion">
        <div class="accordion-item" v-for="(title, index) in titles" :key="index">
          <h2 class="accordion-header" :id="`heading${index}`">
            <button class="accordion-button"
            type="button" 
            data-bs-toggle="collapse" 
            :data-bs-target="`#collapse${index}`" 
            aria-expanded="false" 
            :aria-controls="`collapse${index}`">
              {{title}}
            </button>
          </h2>
          <div :id="`collapse${index}`" class="accordion-collapse collapse" 
          :aria-labelledby="`heading${index}`" 
          data-bs-parent="#accordion">
            <div class="accordion-body">
              <slot :name="index"></slot>
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'
defineProps<{titles: Array<string>}>();
</script>