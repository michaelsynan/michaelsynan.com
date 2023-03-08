<template>
  <div>
    <navbar />
    <NuxtLayout/>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {  transition: all 0.15s; }
  .page-enter-from,
  .page-leave-to { opacity: 0;  filter: blur(1rem); }
</style>