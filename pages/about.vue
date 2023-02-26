<template>
  <div class="flex flex-col flex-grow text-white place-content-start md:place-content-center bg-gradient">
    <div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2">
      <div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8">
        <div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm">
          <img class="absolute top-0 object-cover object-center w-full h-full" src="/michael_synan.jpg" />
        </div>
        <div class="about2 leading-snug md:leading-normal col-span-2 p-3 md:p-6 text-lg md:text-xl align-middle sm:col-span-3 xs:col-span-3 md:col-span-2 mainborder drop-shadow-sm">  
            <h1 class="pb-3 md:pb-6 text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold">
              Good day, y'all
            </h1>  
            <p class="pb-3">
              I'm Michael, front end developer and Project Manager at Kawakami. I'm a long time linux user, 
              philosophy nerd, and opensource advocate.
            </p>
            <p>
              See some of my work at 
              <NuxtLink to="/projects">/projects</NuxtLink> 
              or check out some of the links below.
            </p>   
            <socials />
        </div>
      </div>   
    </div> 
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { onMounted } from "vue";

definePageMeta({    layout: 'default'  })
const runtimeConfig = useRuntimeConfig()
useHead({  title: "About" + " | " + runtimeConfig.public.siteName,  
meta: [    { name: 'description', content: 'I\'m into programming, jazz and chess. Check out my awesome links!' }  ], 
  })

  onMounted(() => {
  gsap.fromTo(".about1", {y: 25, opacity: 0, autoAlpha: 0}, {
   duration: .8,
    y: 0,
    opacity: 1,
    ease: "power2",
    autoAlpha: 1
 });

 gsap.fromTo(".about2", {y: 25, opacity: 0, autoAlpha: 0}, {
   duration: .6,
    y: 0,
    opacity: 1,
    delay: .2,
    ease: "power2",
    autoAlpha: 1
 });


})



</script>

<style scoped>

  .big-icon  { 
    font-size: 2em;
  }

</style>
