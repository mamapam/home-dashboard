<script setup lang="ts">
import PrayerTimes from '../components/PrayerTimes.vue';
import GridDisplay from '../components/GridDisplay.vue';
import TheDate from '../components/TheDate.vue';
</script>

<template>
  <main class="w-[1366px] max-w-[1366px] h-768px max-h-[768px]">
    <GridDisplay>
      <template #item1>
        <TheDate />
      </template>
      <template #item3>
        <PrayerTimes />
      </template>
    </GridDisplay>
  </main>
</template>
