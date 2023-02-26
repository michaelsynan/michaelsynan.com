<template>
  <div class="wholething bg-gradient flex flex-col min-h-screen prose h-max max-w-none bg-zinc-900 prose-invert">
    <NuxtPage class="xs:w-11/12 sm:w-11/12 md:w-2/5 p-5 md:p-10 mx-auto mt-20 prose-lg bg-zinc-900 mb-10 drop-shadow-sm" />
    <slot />
  </div>
</template>

<script setup>
 import gsap from 'gsap';
  import { onMounted } from "vue";

  onMounted(() => {
  gsap.fromTo(".wholething", {y: 25, opacity: 0, autoAlpha: 0}, {
   duration: 1,
    y: 0,
    opacity: 1,
    ease: "power2",
    autoAlpha: 1
 });

})

</script>