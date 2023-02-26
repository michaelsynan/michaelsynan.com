<script setup lang="ts">
  const { page } = useContent()
</script>

<template>
  <hr class="separator" />
  <div class="grid grid-cols-6 pb-5">
    <div class="col-span-4">
      <tags />
    </div>
    <div class="col-span-2 ">
      <publishdate />
    </div>
  </div>
</template>


