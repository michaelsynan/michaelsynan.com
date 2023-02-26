<template>
  <Disclosure as="nav" class="fixed z-50 w-full ml-0 font-sans bg-zinc-900 sm:bg-transparent" v-slot="{ open }">
    <div class="w-full px-4 ml-0 bg-transparent sm:px-6 lg:px-8 z-50">
      <div class="flex items-center justify-between">
        <div class="flex items-center grow">
          <div class="flex-shrink-0 text-white">
            <NuxtLink to="/" class="!bg-transparent z-50">
              MICHAEL SYNAN
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-20 sm:block grow ">
            <div class="flex">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-zinc-800 hover:text-white" -->
              <!-- must add iscurrent -->
              <NuxtLink to="/" class="px-3 py-2 text-sm font-medium tracking-wider text-gray-300 transition-colors hover:bg-zinc-800">Home</NuxtLink>
              <NuxtLink to="/about" class="px-3 py-2 text-sm font-medium tracking-wider text-gray-300 transition-colors hover:bg-zinc-800 hover:text-white">About</NuxtLink>
              <NuxtLink to="/projects" class="px-3 py-2 text-sm font-medium tracking-wider text-gray-300 transition-colors hover:bg-zinc-800 hover:text-white">Projects</NuxtLink>
              <NuxtLink to="/blog" class="px-3 py-2 text-sm font-medium tracking-wider text-gray-300 transition-colors hover:bg-zinc-800 hover:text-white" >Blog</NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 sm:hidden bg-transparent">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center p-2 text-gray-400 !bg-transparent hover:bg-transparent hover:text-white ">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-x-5"
      enter-to-class="transform opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0 translate-x-5"
    >
      <DisclosurePanel class="sm:hidden h-screen  bg-zinc-900">
        <div class="pt-2 pb-3 space-y-1 h-full pt-16">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-zinc-800 hover:text-white" -->
          <DisclosureButton as="a" href="/" class="block px-3 py-2 text-xl font-medium tracking-wider text-white hover:bg-zinc-800 hover:text-white">Home</DisclosureButton>
          <DisclosureButton as="a" href="/about" class="block px-3 py-2 text-xl font-medium tracking-wider text-gray-300 hover:bg-zinc-800 hover:text-white">About</DisclosureButton>
          <DisclosureButton as="a" href="/projects" class="block px-3 py-2 text-xl font-medium tracking-wider text-gray-300 hover:bg-zinc-800 hover:text-white">Projects</DisclosureButton>
          <DisclosureButton as="a" href="/blog" class="block px-3 py-2 text-xl font-medium tracking-wider text-gray-300 hover:bg-zinc-800 hover:text-white">Blog</DisclosureButton>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>

  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
</script>