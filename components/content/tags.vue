<script setup lang="ts">
    const { page } = useContent()
    useContentHead(page)
</script>

<template>
    <div class="mb-4">
        <NuxtLink :to="'/tag' + '/' + tag.replace(/\//g, '-')" v-for="(tag, index) in page.tag" :key="index">
        <span class="p-1 !py-0.5 mr-1 no-underline transition-colors bg-bluegreen hover:bg-bluegreen-light">
            <p class="text-xs md:text-sm no-underline uppercase inline-block m-0">{{ tag }}</p>
        </span> 
        </NuxtLink>
    </div>
</template>


