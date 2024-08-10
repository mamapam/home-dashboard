<script setup lang="ts">
import GridDisplay from '../components/GridDisplay.vue';
import TheDate from '../components/TheDate.vue';
</script>

<template>
  <main class="w-[1366px] max-w-[1366px] h-768px max-h-[768px]">
    <GridDisplay>
      <template #item1>
        <TheDate />
      </template>
    </GridDisplay>
  </main>
</template>
