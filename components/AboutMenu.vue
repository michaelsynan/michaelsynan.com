<template>
  <div class="relative text-stone-500">
    <div>
      <button @click="toggleMenu2" :class="{ 'text-stone-200' : isOpen2 }" class="px-0 md:px-1">Contact {{ isOpen2 ? '-' : '+' }}</button>
      <span class="px-2 ">|</span>   
      <button @click="toggleMenu1" :class="{ 'text-stone-200' : isOpen1 }" class="px-0 md:px-1">Certifications {{ isOpen1 ? '-' : '+' }}</button>
      <span class="px-2">|</span>  
  
      <nuxt-link to="/projects">Projects</nuxt-link>
    </div>
    <div>
      <ul ref="menuItems2" v-if="isOpen2" :class="{ 'opacity-0': !isOpen2, 'text-stone-200' : isOpen2 }" class="pt-2">
        <li><a href="https://www.linkedin.com/in/hellomichaelsynan/" target="_blank">&#8259; LinkedIn &nearr;</a></li>
        <li><a href="https://airtable.com/shrTD2l45wB1qa6Pb" target="_blank">&#8259; Message Me &nearr;</a></li>
      </ul>
      <ul ref="menuItems1" v-if="isOpen1" :class="{ 'opacity-0': !isOpen1, 'text-stone-200' : isOpen1 }" class="pt-2">

        <li><a href="https://skillshop.credential.net/e5d43232-e49e-46f4-91fb-6eec91fbc730?record_view=true" target="_blank">&#8259; Google Ad Search &nearr;</a></li>
        <li><a href="https://skillshop.credential.net/012ab1f5-95f1-4791-815e-af1b6dd3c8ca?record_view=true" target="_blank">&#8259; Google Analytics &nearr;</a></li>
        <li><a href="https://www.coursera.org/account/accomplishments/certificate/2RSPD7AUSRZP" target="_blank">&#8259; Google UX Design &nearr;</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
  .opacity-0 {
    opacity: 0;
  }
</style>

<script setup>
import { gsap } from 'gsap'
import { ref, watchEffect } from 'vue'

const menuItems1 = ref(null)
const isOpen1 = ref(false)

const menuItems2 = ref(null)
const isOpen2 = ref(false)

function toggleMenu(isOpen, menuItems) {
  if (isOpen.value) {
    gsap.to(menuItems.value, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        isOpen.value = false;
      }
    });
  } else {
    gsap.set(menuItems.value, { height: 'auto', opacity: 0 });
    gsap.to(menuItems.value, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        isOpen.value = true;
      }
    });
  }
}


function toggleMenu1() {
  toggleMenu(isOpen1, menuItems1)
  if (isOpen2.value) {
    toggleMenu(isOpen2, menuItems2)
  }
}

function toggleMenu2() {
  toggleMenu(isOpen2, menuItems2)
  if (isOpen1.value) {
    toggleMenu(isOpen1, menuItems1)
  }
}

if (typeof window !== 'undefined') {
  watchEffect(() => {
    if (isOpen1.value || isOpen2.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })
}
</script>
<style>
  .opacity-0 {
    opacity: 0;
  }
</style>