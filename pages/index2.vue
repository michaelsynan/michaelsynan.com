<template>
    <div class="flex items-center justify-center text-white h-screen max-w-6xl mx-auto">
        <div class="p-10">
            <h1 id="heading" class="pb-10 tracking-wide text-8xl font-display xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-h-screen   text-stone-100 select-none">
            <span class="letter">Front</span>
            <span class="letter">-</span>
            <span class="letter">End </span>
            <span class="letter">Developer </span>
            <span class="letter">& </span>
            <span class="letter">Project </span>
            <span class="letter">Manager</span>
            <span class="letter">.</span>
            </h1>  
            <h1 class=" text-white text-lg ml-auto w-full inline-block select-none" >
            <nuxt-link to="/about"  id="link1" class="transition ease-in-out border-2 border-white p-2 px-3 md:p-3 md:px-4 text-base md:text-lg mr-4 hover:bg-white hover:!text-[#131721] hover:transition-all">
                Learn More
            </nuxt-link>
            <a href="https://airtable.com/shrTD2l45wB1qa6Pb" class="group block md:inline-block mt-6 md:mt-0" id="link2">Let's Talk
                <span class="group-hover:pl-2 group-hover:transition-all text-bluegreen group-hover:text-bluegreen-light">&#8594;</span>
            </a>
            </h1>
        </div>
        <div class="hidden absolute bottom-0">
            <a rel="me" href="https://mstdn.social/@letsbecomehuman">Mastodon Verification</a>
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
    gsap.fromTo("#link1", {y: 25, opacity: 0, autoAlpha: 0}, {
     duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2",
      autoAlpha: 1,
      delay: 1
   });
   gsap.fromTo("#link2", {y: 25, opacity: 0, autoAlpha: 0}, {
     duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2",
      autoAlpha: 1,
      delay: 1.3
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