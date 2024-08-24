<script setup lang="ts">
import Jsmpeg from 'jsmpeg';

const { port, cameraId } = defineProps<{
  port: string;
  cameraId: string;
}>();
const canvas = ref(null);

onMounted(async () => {
  await useFetch('/api/stream', { query: { port, cameraId } });
  new Jsmpeg.Player(`ws://localhost:${port}`, {
    canvas: canvas.value,
    autoplay: true
  });
});
</script>

<template>
  <TheCard>
    <canvas ref="canvas" class="h-full w-full"></canvas>
  </TheCard>
</template>
