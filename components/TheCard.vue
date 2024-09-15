<script setup lang="ts">
const { applyPadding = true } = defineProps<{ applyPadding?: boolean }>();
</script>

<template>
  <div class="bg-dark-200 h-full w-full rounded-2xl flex justify-center items-center" :class="[applyPadding ? 'p-3' : 'p-0']">
    <slot></slot>
  </div>
</template>
