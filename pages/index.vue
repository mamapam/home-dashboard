<script setup lang="ts">
import PrayerTimes from '../components/PrayerTimes.vue';
import GridDisplay from '../components/GridDisplay.vue';
import TheDate from '../components/TheDate.vue';
import CameraStream from '../components/CameraStream.vue';

const runtimeConfigs = useRuntimeConfig();
console.log(runtimeConfigs.public.cameraBackyard);
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
      <template #item6>
        <CameraStream :stream-url="runtimeConfigs.public.camera1" />
      </template>
      <template #item7>
        <CameraStream :stream-url="runtimeConfigs.public.camera2" />
      </template>
      <template #item8>
        <CameraStream :stream-url="runtimeConfigs.public.camera3" />
      </template>
    </GridDisplay>
  </main>
</template>
