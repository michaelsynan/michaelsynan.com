<template>
  <main>
    <ContentDoc class="bg-gradient">     
      <template v-slot="{ doc }">
        <h1 class="text-2xl md:text-4xl">
          {{ doc.title }}
        </h1>      
        <ContentRenderer :value="doc" /> 
      </template>  
      <template #not-found>
        Squiggle not found mate
      </template>
      <template #empty>        
        <h1>Document is empty</h1>      
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
 import gsap from 'gsap';
  import { onMounted } from "vue";
  import { useRoute } from 'vue-router'
  const { page } = useContent()
  const router = useRouter()
  const route = useRoute()
  useContentHead(page)
</script>

