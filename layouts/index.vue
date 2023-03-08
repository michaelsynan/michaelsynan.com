<template>
  <div class="bg-gradient flex flex-col min-h-screen prose h-max max-w-none prose-invert">
    <NuxtPage class="xs:w-5/6 sm:w-3/4 md:w-1/2 w-1/2 pt-20 mx-auto" />
    <slot />
  </div>
</template>
 
<style scoped>

  h2 {
    margin: 0px !important;
  }

</style>