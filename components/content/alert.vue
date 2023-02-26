<script setup>
    defineProps(["type"]);
</script>

<template>
  <div :class="[type]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

