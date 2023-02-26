<template>
  <main class="!bg-gradient">   
    <tagsearch />
  </main>
</template>

<script setup lang="ts">

  definePageMeta({    layout: 'index'  })
  import { useRoute } from 'vue-router'
  const { page } = useContent()
  useContentHead(page)

  const router = useRouter()
  const route = useRoute()


  const tag = route.params.tag
   
   

  import { useTagStore } from '~/store/tagStore.js';
  const tagStore = useTagStore();
  const tags = tagStore.getAllTags ;

</script>

