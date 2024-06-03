<template>
    <div class="accordion" id="accordion">
        <div class="accordion-item" @click="$emit('emitTitle', title)" v-for="(title, index) in titles" :key="index">
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
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default{
name: 'h-accordion',
props: {
  titles: Array,
},
}
</script>