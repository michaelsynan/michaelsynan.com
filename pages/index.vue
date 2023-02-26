<template>
  <div class="flex flex-col flex-grow text-white place-content-center">
    <div class="w-4/5 md:w-2/3 mx-auto">
        <div class="grid grid-cols-5">
          <div class="col-span-5 p-5 md:p-20 -mb-5">

            <h1 id="heading" class="pb-10 tracking-wide text-8xl font-display xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-h-screen 
            bg-gradient-to-tr from-gray-100 via-zinc-100 to-rose-100
           
            text-transparent bg-clip-text select-none">

            <span class="letter">Front</span>
          <span class="letter">-</span>
          <span class="letter">End </span>
  
            <span class="letter">Developer </span>
            <span class="letter">& </span>
      
          <span class="letter">Project </span>
          <span class="letter">Manager</span>
          <span class="letter">.</span>
            </h1>  

            <h1 class="group bg-gradient-to-tr from-gray-100 via-zinc-100 to-rose-100
           
           text-transparent bg-clip-text bg-gradient-to-r text-3xl ml-auto w-full inline-block select-none" id="heading2"><a href="https://airtable.com/shrTD2l45wB1qa6Pb">Let's talk <span class="group-hover:pl-2 group-hover:transition-all text-bluegreen group-hover:text-bluegreen-light">&#8594;</span></a></h1>





            
          </div>
          <div class="hidden absolute bottom-0">
            <a rel="me" href="https://mstdn.social/@letsbecomehuman">Mastodon Verification</a>
          </div>
        </div>
    </div> 
  </div>
</template>

<script setup>
  import gsap from 'gsap';
  import { onMounted } from "vue";


  definePageMeta({    layout: 'default'  })
  const runtimeConfig = useRuntimeConfig()
  useHead({  title: runtimeConfig.public.siteName,  
  meta: [    
    { name: 'description', content: 'Hi! I\'m a front-end developer with a background in digital marketing, project management, and UI/UX design.' }  ],
    })

    onMounted(() => {
  gsap.fromTo("#heading", {y: 25, opacity: 0, autoAlpha: 0}, {
   duration: 1,
    y: 0,
    opacity: 1,
    ease: "power2",
    autoAlpha: 1
 });
  const fadeInAll = gsap.from(".letter", { opacity: 0, stagger: { // wrap advanced options in an object
    each: 0.2,
    from: "start",
    grid: "auto",
   axis: "y",
    repeat: 0 // Repeats immediately, not waiting for the other staggered animations to finish
  } });
  gsap.fromTo("#heading2", {y: 25, opacity: 0, autoAlpha: 0}, {
   duration: 1,
    y: 0,
    opacity: 1,
    ease: "power2",
    autoAlpha: 1,
    delay: 1.5
 });
})

</script>

<style scoped>
.motion {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: var(--splash);
}
</style>