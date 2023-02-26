<script setup lang="ts">
  const { page } = useContent()
  function  formatDate(date) {
      return new Date(date).toLocaleDateString('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }   
</script>

<template>
    <div>
        <p class="m-0 text-right text-sm md:text-lg text-zinc-500">
          {{ formatDate(page.createdAt) }} 
        </p>
    </div>
</template>
