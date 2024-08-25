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
      <template #item2>
        <WeatherDisplay />
      </template>
      <template #item3>
        <PrayerTimes />
      </template>
      <!-- <template #item6>
        <CameraStream port="9000" camera-id="porch" />
      </template>
      <template #item7>
        <CameraStream port="9001" camera-id="garage" />
      </template>
      <template #item8>
        <CameraStream port="9002" camera-id="backyard" />
      </template> -->
    </GridDisplay>
  </main>
</template>
