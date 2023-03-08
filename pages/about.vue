<template>
  <div class="flex flex-col flex-grow text-white place-content-start md:place-content-center bg-gradient">
  <div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2">
      <div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8">
        <div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm">
          <img class="absolute top-0 object-cover object-center w-full h-full" src="/michael_synan.jpg" />
        </div>
        <div class="px-4 about2 leading-snug md:leading-normal col-span-2  align-middle sm:col-span-3 xs:col-span-3 md:col-span-2 ">  
            <p class="pb-3 text-2g md:text-2xl">
              I'm Michael, a front-end developer, long-time Linux user, philosophy nerd, and open-source advocate. My Master's degree in Urban Affairs and Bachelor's degree in Psychology have helped me understand the human side of technology. 
            </p>
            <span class="mt-2  text-2g md:text-2xl pb-2 mb-4 inline-block w-full">Let's collaborate.</span>
            <AboutMenu />
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

</style>
